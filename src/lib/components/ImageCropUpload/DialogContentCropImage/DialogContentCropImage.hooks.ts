import { useRef, useState } from "react";
import { Crop, PercentCrop, PixelCrop } from "react-image-crop";
import { useDialogContext } from "~/components/Dialog";
import { useDebounceEffect } from "~/hooks";
import { canvasPreview, getFileDataUrl } from "~/utils";
import { DialogContentCropImageProps } from "./DialogContentCropImage.types";
import { centerAspectCrop, getAspect, getCanvasImageFile } from "./DialogContentCropImage.utils";

export function useDialogContentCropImageHook({
  onAccept,
  ratio
}: DialogContentCropImageProps) {

  const rotate = 0;
  const scale = 1;

  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [crop, setCrop] = useState<Crop>();

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const dialogContext = useDialogContext<{ value: File, fileUrl?: string }>();
  const imageRef = useRef<HTMLImageElement>(null);

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imageRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imageRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  );

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (ratio) {
      const { width, height } = event.currentTarget;
      const aspect = getAspect(ratio)!;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  const handleUpdateCrop = (crop: PixelCrop, percentageCrop: PercentCrop) => {
    setCompletedCrop(crop);
    setCrop(percentageCrop);
  };

  const handleCompletedCrop = (crop: PixelCrop) => {
    setCompletedCrop(crop);
  };

  const handleApplyCrop = async () => {
    const imageFile = await getCanvasImageFile(
      imageRef.current,
      previewCanvasRef.current,
      completedCrop
    );
    const imageUrl = await getFileDataUrl(imageFile);
    dialogContext.hide();
    onAccept?.(imageFile, imageUrl!);
  };

  return {
    dialogContext,
    action: {
      handleCompletedCrop,
      handleUpdateCrop,
      handleApplyCrop,
      handleImageLoad
    },
    state: {
      crop
    },
    refs: {
      previewCanvasRef,
      imageRef
    }
  };
}
