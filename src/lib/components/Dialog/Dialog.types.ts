import {
  AllHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  Ref
} from "react"
import {
  ClassNameValue
} from "tailwind-merge"
import {
  DialogSize
} from "./Dialog.theme"

export interface DialogRef {
  show: <D extends { [key: string]: any }>(data?: D) => void
  hide: () => void
}

export interface DialogContextProps extends HTMLAttributes<HTMLDivElement> {
  forwardedRef: Ref<DialogRef>
}

export interface DialogContextValue<D extends { [key: string]: any }> {
  dismiss?: boolean
  visible?: boolean
  reset: () => void
  show: (data?: D) => void
  hide: () => void
  data: D
}

export type DialogSizeType = keyof typeof DialogSize;

export interface DialogClassNames {
  backdrop?: ClassNameValue
  wrapper?: ClassNameValue
  dialog?: ClassNameValue
  title?: ClassNameValue
}

export interface DialogProps extends Omit<AllHTMLAttributes<HTMLDivElement>, 'size' | 'sizes'> {
  closeOnBackdropClicked?: boolean
  dialogButton?: ReactElement
  classNames?: DialogClassNames
  onDismiss?: () => void
  onShow?: () => void
  onHide?: () => void
  title?: string
  size?: DialogSizeType
}
