import {
  AnimationEvent,
  cloneElement,
  useEffect
} from "react";
import {
  createPortal
} from "react-dom";
import {
  twMerge
} from "tailwind-merge";

import {
  useDialogContext,
  withDialogContext
} from "./Dialog.context";
import {
  DialogSize,
  Theme
} from "./Dialog.theme";
import {
  DialogProps
} from "./Dialog.types";
import {
  DialogTitle
} from "./DialogTitle.page";

function _Dialog({
  closeOnBackdropClicked = true,
  size = 'md',
  dialogButton,
  classNames,
  className,
  onDismiss,
  children,
  onShow,
  onHide,
  title,
  ...props
}: DialogProps) {

  const dialogContext = useDialogContext();

  useEffect(
    () => {

      function handleKeydown(this: HTMLElement, event: KeyboardEvent) {
        if (event.code === 'Escape') {
          event.stopPropagation();
          dialogContext.hide();
        }
      }

      if (dialogContext.visible) {
        document.body.style.overflow = 'hidden';
        document.body.addEventListener('keydown', handleKeydown);
        return () => {
          document.body.style.overflow = '';
          document.body.removeEventListener('keydown', handleKeydown);
        };
      }
      return () => {
        document.body.style.overflow = '';
      }
    },
    [dialogContext.visible]
  );

  useEffect(
    () => {
      if (dialogContext.dismiss) {
        onDismiss?.();
      }
    },
    [dialogContext.dismiss]
  );

  const handleCloseDialog = (event: AnimationEvent<HTMLDivElement>) => {
    switch (event.animationName) {
      case 'opacity-to-full':
        onShow?.();
        break;

      case 'opacity-to-null':
        document.body.style.overflow = '';
        dialogContext.reset();
        onHide?.();
        break;
    }
  };

  return (
    <>
      {(!!dialogButton) && cloneElement(dialogButton, {
        onClick: () => dialogContext.show(),
        ...dialogButton.props,
        className: twMerge(dialogButton.props.className),
        key: dialogButton.key
      })}
      {(dialogContext.visible) && createPortal(
        <div
          onAnimationEnd={handleCloseDialog}
          onClick={closeOnBackdropClicked ? () => dialogContext.hide() : undefined}
          className={twMerge(
            Theme.container,
            Theme.backdrop,
            dialogContext.dismiss ? "animate-opacity-to-null" : "animate-opacity-to-full",
            classNames?.backdrop
          )}
        >
          <div className={twMerge(Theme.wrapper, DialogSize[size!], classNames?.wrapper)}>
            <div
              onClick={closeOnBackdropClicked ? (_) => _.stopPropagation() : undefined}
              id="dialog-wrapper-content"
              className={twMerge(
                Theme.content,
                dialogContext.dismiss ? "animate-modal-close" : "animate-modal-open",
                classNames?.dialog,
                className
              )}
              {...props}
            >
              {(!!title) && <DialogTitle className={twMerge(classNames?.title, classNames?.title)} {...{ title }} />}
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export const Dialog = withDialogContext(_Dialog);

