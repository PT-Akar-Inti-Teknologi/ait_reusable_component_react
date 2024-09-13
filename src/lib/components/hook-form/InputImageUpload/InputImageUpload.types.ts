import { ImageUploadProps } from "~/components/ImageUpload";
import { InputHookFormProps } from "~/types";

export interface InputImageUploadProps extends Omit<ImageUploadProps, 'name'>, InputHookFormProps { }
