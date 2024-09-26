import { useRef } from "react";
import { Dialog, DialogRef } from "../Dialog";
import { ImageUpload } from "../ImageUpload";
import { DialogContentCropImage } from "./DialogContentCropImage";
import { ImageCropUploadProps } from "./ImageCropUpload.types";

export function ImageCropUpload({
  dialogTitle = 'Crop Image',
  onChangeValue,
  freeCrop,
  ...props
}: Readonly<ImageCropUploadProps>) {

  const dialogRef = useRef<DialogRef>(null);

  const handleAcceptValue = (file?: File, fileUrl?: string) => {
    if (file) {
      dialogRef.current?.show({ file, fileUrl });
    } else {
      onChangeValue?.(file, fileUrl)
    }
  };

  return (
    <>
      <ImageUpload
        {...props}
        onChangeValue={handleAcceptValue}
        validateRatio={false}
        draftValue={false}
      />
      <Dialog
        closeOnBackdropClicked={false}
        title={dialogTitle}
        ref={dialogRef}
      >
        <DialogContentCropImage
          onAccept={onChangeValue}
          ratio={props.ratio}
          {...{ freeCrop }}
        />
      </Dialog>
    </>
  );
}
