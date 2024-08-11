import { ImgHTMLAttributes } from "react";

export enum ThumbnailRatio {
  video= 'aspect-video',
  square= 'aspect-square',
  auto= 'aspect-auto'
}

export type ThumbnailType= keyof typeof ThumbnailRatio;

export interface ThumbnailProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: ThumbnailType;
}
