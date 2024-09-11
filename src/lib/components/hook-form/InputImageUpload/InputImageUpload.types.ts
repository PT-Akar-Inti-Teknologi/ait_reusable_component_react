import { RegisterOptions } from "react-hook-form";
import { ImageUploadProps } from "~/components/ImageUpload/ImageUpload.types";

export interface InputImageUploadProps extends ImageUploadProps {
  rule?: RegisterOptions<any, string>;
  name: string;
}
