import {
  twMerge
} from "tailwind-merge";
import {
  Theme
} from "./Thumbnail.theme";
import {
  ThumbnailProps,
  ThumbnailRatio
} from "./Thumbnail.types";

export function Thumbnail({
  alt = '',
  className,
  ratio,
  ...props
}: Readonly<ThumbnailProps>) {

  return (
    <div className={twMerge(Theme.container, ratio && ThumbnailRatio[ratio], className)}>
      <img
        className={twMerge(Theme.image, ratio && ThumbnailRatio[ratio], className)}
        {...{ ...props, alt }}
      />
    </div>
  );
}
