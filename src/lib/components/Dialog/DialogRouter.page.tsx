import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "./Dialog.component";
import { DialogRef } from "./Dialog.types";
import { DialogRouterProps } from "./DialogRouter.types";

export function DialogRouter({
  onDismiss,
  path,
  ...props
}: Readonly<DialogRouterProps>) {

  const dialogRef = useRef<DialogRef>(null);
  const navigate = useNavigate();

  const isOpen = path === location.pathname;

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.hide();
    }
  }, [isOpen]);

  const handleonDismiss = useCallback(
    () => {
      onDismiss?.();
      if (isOpen) {
        navigate(-1);
      }
    },
    [isOpen]
  );

  return (
    <Dialog
      onDismiss={handleonDismiss}
      ref={dialogRef}
      {...props}
    />
  );
}
