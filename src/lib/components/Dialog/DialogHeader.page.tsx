import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function DialogHeader({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {

  return (
    <div
      className={twMerge(
        "flex items-center justify-between p-4 border-b rounded-t",
        "ws:px-4 ws:py-2 md:p-4 dark:border-gray-600",
        className
      )}
      {...props}
    />
  );
}
