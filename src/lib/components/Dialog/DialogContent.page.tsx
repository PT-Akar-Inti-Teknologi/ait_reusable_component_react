import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function DialogContent({
  className,
  ...props

}: Readonly<HTMLAttributes<HTMLDivElement>>) {

  return (
    <div
      className={twMerge("p-4 space-y-4 md:p-5 max-h-[calc(100vh-192px)] overflow-y-scroll no-scrollbar", className)}
      {...props}
    />
  );
}
