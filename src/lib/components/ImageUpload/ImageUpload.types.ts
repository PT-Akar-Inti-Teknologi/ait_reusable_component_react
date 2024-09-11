import { ReactNode } from "react";
import { DropzoneOptions } from "react-dropzone";

export enum ImageMimeType {
  jpeg = 'image/jpeg',
  webp = 'image/webp',
  tiff = 'image/tiff',
  svg = 'image/svg+xml',
  png = 'image/png',
  ico = 'image/x-icon'
}

export enum ImageRatio {
  '21:9' = '21/9',
  '16:9' = '16/9',
  '4:3' = '4/3',
  '1:1' = '1/1',
}

export type ImageAcceptType = keyof typeof ImageMimeType;
export type ImageRatioType = keyof typeof ImageRatio | null;

export interface RequirementParam {
  maxSize?: string;
  ratio?: ImageRatioType;
  accept?: string;
}

export interface RequirementErrorMessage {
  invalidRatio?: (value?: ImageRatioType) => string;
  invalidType?: (value?: string) => string;
  tooLarge?: (value?: string) => string;
}

export interface ImageUploadProps extends Omit<DropzoneOptions, 'multiple' | 'onDrop' | 'maxFiles' | 'accept'> {
  requirementErrorMessage?: RequirementErrorMessage
  onChangeValue?: (file?: File) => void
  requirements?: (data: RequirementParam) => ReactNode[]
  placeholder?: string
  buttonText?: string
  helperText?: string
  className?: string
  required?: boolean
  accept?: ImageAcceptType[]
  ratio?: ImageRatioType;
  error?: boolean
  label?: string
  value?: string | File
  name?: string
  inputRef?: any
}
