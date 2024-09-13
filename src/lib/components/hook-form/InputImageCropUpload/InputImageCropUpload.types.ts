import { ImageCropUploadProps } from "~/components/ImageCropUpload";
import { InputHookFormProps } from "~/types";

export interface InputImageCropUploadProps extends Omit<ImageCropUploadProps, 'name'>, InputHookFormProps { }
