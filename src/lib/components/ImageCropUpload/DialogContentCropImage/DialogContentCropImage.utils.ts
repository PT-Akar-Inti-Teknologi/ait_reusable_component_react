import { centerCrop, makeAspectCrop, PixelCrop } from "react-image-crop";
import { ImageRatioType } from "~/components/ImageUpload";

export function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {

  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

export function getAspect(ratio?: ImageRatioType) {
  if (ratio) {
    const [ratio0, ratio1] = ratio.split(':');
    return parseInt(ratio0) / parseInt(ratio1);
  }
}

export async function getCanvasImageFile(
  image?: HTMLImageElement | null,
  previewCanvas?: HTMLCanvasElement | null,
  completedCrop?: PixelCrop
) {
  if (!image || !previewCanvas || !completedCrop) {
    throw new Error('Crop canvas does not exist')
  }

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height

  const offscreen = new OffscreenCanvas(
    completedCrop.width * scaleX,
    completedCrop.height * scaleY,
  )
  const ctx = offscreen.getContext('2d')
  if (!ctx) {
    throw new Error('No 2d context')
  }

  ctx.drawImage(
    previewCanvas,
    0,
    0,
    previewCanvas.width,
    previewCanvas.height,
    0,
    0,
    offscreen.width,
    offscreen.height,
  )
  // You might want { type: "image/jpeg", quality: <0 to 1> } to
  // reduce image size
  const blob = await offscreen.convertToBlob({ type: 'image/png', quality: 1 });
  const file = new File([blob], `crop.png`, { type: 'image/png' });
  return file;
}
