import { UseMutationResult } from "@tanstack/react-query";
import { HTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";

export interface DialogActionProps extends HTMLAttributes<HTMLDivElement> {
  onSuccessGoBack?: boolean
  mutation?: UseMutationResult<any, any, any>
  loading?: boolean
  action?: string
  form?: UseFormReturn<any, any, undefined>
}
