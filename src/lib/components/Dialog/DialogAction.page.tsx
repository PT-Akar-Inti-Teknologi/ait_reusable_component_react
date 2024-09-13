import {
  Children,
  createElement,
  isValidElement,
  useEffect,
  useRef
} from "react";
import {
  useNavigate
} from "react-router-dom";
import {
  twMerge
} from "tailwind-merge";
import {
  useDialogContext
} from "./Dialog.context";
import { Theme } from "./DialogAction.theme";
import {
  DialogActionProps
} from "./DialogAction.types";

export function DialogAction({
  onSuccessGoBack,
  className,
  children,
  mutation,
  loading,
  action,
  form,
  ...props
}: Readonly<DialogActionProps>) {

  const [cancelEl, submitEl] = Children.toArray(children);

  const dialogContext = useDialogContext();
  const wasLoading = useRef<boolean>(false);
  const navigate = useNavigate();

  const isLoading = mutation?.isPending || loading;

  useEffect(
    () => {
      if (mutation?.isPending) {
        wasLoading.current = true;
      }
    },
    [mutation?.isPending]
  );

  useEffect(
    () => {
      if (mutation?.isSuccess && wasLoading.current && dialogContext.visible) {
        dialogContext.hide();
        return () => {
          if (onSuccessGoBack) {
            setTimeout(() => navigate(-1), 350);
          }
        }
      }
    },
    [
      dialogContext.visible,
      mutation?.isSuccess
    ]
  );

  return (
    <div className={twMerge(Theme.container, className)} {...props}>
      {isValidElement(cancelEl) && createElement(cancelEl.type, {
        children: "Cancel",
        disabled: isLoading,
        onClick: () => cancelEl?.props?.onClick?.() || dialogContext.hide(),
        color: "primary",
        ...cancelEl.props,
        className: twMerge("min-w-[128px]", cancelEl.props?.className),
        variant: "outlined"
      })}
      {isValidElement(submitEl) && createElement(submitEl.type, {
        children: (action === 'add') ? "Add" : "Save",
        onClick: form?.handleSubmit((_: any) => mutation?.mutate(_)),
        loading: isLoading,
        color: "primary",
        ...submitEl.props,
        className: twMerge("min-w-[128px]", submitEl.props?.className),
        variant: "contained"
      })}
    </div>
  );
}
