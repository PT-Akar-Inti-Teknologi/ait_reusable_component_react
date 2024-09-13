import { Typography } from "../Typography";
import { useDialogContext } from "./Dialog.context";
import { DialogHeader } from "./DialogHeader.page";
import { DialogTitleProps } from "./DialogTitle.types";

export function DialogTitle({
  withCloseButton = true,
  title,
  ...props
}: Readonly<DialogTitleProps>) {

  const dialogContext = useDialogContext();

  return (
    <DialogHeader {...props}>
      <Typography variant="h5" type="normal">
        {title}
      </Typography>
      {(withCloseButton) && (
        <button
          className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => dialogContext.hide()}
          type="button"
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      )}
    </DialogHeader>
  );
}
