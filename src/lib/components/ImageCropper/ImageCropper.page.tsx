import React, { useRef, useState } from "react";
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { ImageCropperProps } from "~/components/ImageCropper/ImageCropper.types.ts";
import { useDebounceEffect } from "~/hooks";
import { canvasPreview } from "~/utils";


export function ImageCropper({ aspect, onCropped }: ImageCropperProps) {
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const blobUrlRef = useRef<string | null>(null);
    const [scale] = useState(1);
    const [rotate] = useState(0);

    function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
        return centerCrop(
            makeAspectCrop({ unit: '%', width: 90 }, aspect, mediaWidth, mediaHeight),
            mediaWidth,
            mediaHeight
        );
    }

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setImgSrc(null); // Clear previous image
            const reader = new FileReader();
            reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const { width, height } = e.currentTarget;
        setCrop(centerAspectCrop(width, height, aspect));
    }

    async function onCropImage() {
        const image = imgRef.current;
        const previewCanvas = previewCanvasRef.current;
        if (!image || !previewCanvas || !completedCrop) return;

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        const offscreen = new OffscreenCanvas(
            completedCrop.width * scaleX,
            completedCrop.height * scaleY
        );
        const ctx = offscreen.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(
            previewCanvas,
            0, 0, previewCanvas.width, previewCanvas.height,
            0, 0, offscreen.width, offscreen.height
        );

        const blob = await offscreen.convertToBlob({ type: 'image/png' });

        if (blobUrlRef.current) {
            URL.revokeObjectURL(blobUrlRef.current);
        }
        blobUrlRef.current = URL.createObjectURL(blob);

        const fileName = Math.random().toString(36).substring(7);
        const file = new File([blob], `${fileName}.png`, { type: 'image/png' });

        onCropped(file); // Pass the cropped file to the parent component
    }

    useDebounceEffect(
        () => {
            if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate
                );
            }
        },
        100,
        [completedCrop, scale, rotate]
    );

    return (
        <div>
            <input type="file" accept="image/*" onChange={onSelectFile} />
            {imgSrc && (
                <>
                    <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={aspect}
                    >
                        <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} />
                    </ReactCrop>
                    {completedCrop && (
                        <>
                            <canvas ref={previewCanvasRef} style={{ width: '100%', height: '300px', border: '1px solid black' }} />
                            <button onClick={onCropImage}>Crop Image</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
}