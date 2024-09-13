import { HTMLAttributes } from "react"

export interface DialogTitleProps extends HTMLAttributes<HTMLDivElement> {
  withCloseButton?: boolean
  title: string
}
