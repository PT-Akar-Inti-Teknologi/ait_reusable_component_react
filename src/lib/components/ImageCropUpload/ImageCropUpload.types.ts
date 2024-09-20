import { ImageUploadProps } from "../ImageUpload/ImageUpload.types";

export interface ImageCropUploadProps extends ImageUploadProps {
  dialogTitle?: string;
  freeCrop?: boolean;
}
