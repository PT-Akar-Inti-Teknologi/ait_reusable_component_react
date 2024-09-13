import { ReactCropProps } from "react-image-crop";
import { ImageRatioType } from "~/components/ImageUpload";

export interface DialogContentCropImageProps extends Omit<ReactCropProps, 'onChange' | 'onComplete' | 'crop'> {
  onAccept?: (file: File, fileUrl: string) => void;
  freeCrop?: boolean;
  ratio?: ImageRatioType;
}
