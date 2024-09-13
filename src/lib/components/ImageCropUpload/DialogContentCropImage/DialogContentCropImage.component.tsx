import { useState } from "react";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/Button";
import { DialogContent } from "~/components/Dialog/DialogContent.page";
import { useDialogContentCropImageHook } from "./DialogContentCropImage.hooks";
import { Theme } from "./DialogContentCropImage.theme";
import { DialogContentCropImageProps } from "./DialogContentCropImage.types";
import { getAspect } from "./DialogContentCropImage.utils";

export function DialogContentCropImage({
  freeCrop,
  onAccept,
  ratio,
  ...props
}: Readonly<DialogContentCropImageProps>) {

  const [isPreviewCrop, setIsPreviewCrop] = useState(false);

  const {
    dialogContext,
    action,
    state,
    refs
  } = useDialogContentCropImageHook({
    onAccept,
    ratio
  });

  return (
    <>
      <DialogContent>
        <div className="relative">
          <canvas
            className={twMerge(Theme.canvasPreview, !isPreviewCrop && "hidden")}
            ref={refs.previewCanvasRef}
          />
          <ReactCrop
            onComplete={action.handleCompletedCrop}
            className={twMerge("m-0", isPreviewCrop && "invisible")}
            onChange={action.handleUpdateCrop}
            aspect={getAspect(ratio)}
            crop={state.crop}
            {...props}
          >
            <img
              className="max-w-full"
              onLoad={action.handleImageLoad}
              style={{ transform: `scale(1) rotate(0deg)` }}
              ref={refs.imageRef}
              src={dialogContext.data.fileUrl}
              alt=""
            />
          </ReactCrop>
        </div>
      </DialogContent>
      <div className={twMerge(Theme.actions)}>
        {/* <Button>
          Aspect Ratio {ratio}
        </Button> */}
        <div className={Theme.innerActions}>
          <Button variant="outlined" onClick={() => dialogContext.hide()}>
            Cancel
          </Button>
          <Button onClick={() => setIsPreviewCrop((_) => !_)}>
            {isPreviewCrop ? "Crop Image" : "Preview"}
          </Button>
          <Button onClick={() => action.handleApplyCrop()}>
            Apply
          </Button>
        </div>
      </div>
    </>
  );
}
