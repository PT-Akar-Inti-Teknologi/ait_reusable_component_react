import {
  ReactNode,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useState
} from "react";
import {
  useDropzone
} from "react-dropzone";
import {
  twMerge
} from "tailwind-merge";
import {
  hasArray,
  humanFileSize,
  safeArray
} from "~/utils";
import {
  ActionButton
} from "../ActionButton";
import {
  Button
} from "../Button/Button.page";
import {
  HelperText
} from "../HelperText";
import {
  Label
} from "../Label";
import {
  Thumbnail
} from "../Thumbnail";
import {
  Typography
} from "../Typography";
import {
  PlaceholderIcon
} from "./icons";
import {
  Theme
} from "./ImageUpload.theme";
import {
  ImageMimeType,
  ImageRatio,
  ImageUploadProps
} from "./ImageUpload.types";
import {
  getErrorRejection,
  imageAcceptLabel,
  validateImageRatio
} from "./ImageUpload.utils";

function _ImageUpload(
  {
    buttonText = 'Select Photo',
    maxSize = 1,
    accept = ['jpeg', 'png'],
    ratio = '16:9',
    requirementErrorMessage,
    onChangeImage,
    requirements,
    placeholder,
    helperText,
    className,
    required,
    value,
    error,
    label,
    ...props
  }: ImageUploadProps,
  forwardedRef: Ref<HTMLDivElement>
) {

  const [rejectReasons, setRejectReasons] = useState<string[]>([]);
  const [fileUrl, setFileUrl] = useState<string | undefined>(value);

  const isError = rejectReasons.length > 0 || error;
  const hasFile = !!fileUrl;

  useEffect(() => {
    if (value !== undefined) {
      setFileUrl(value);
    }
  }, [value]);

  const handleAcceptedImage = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const _fileUrl = reader.result?.toString();

        const img = new Image;
        img.src = _fileUrl!;
        img.onload = (() => {

          if (!validateImageRatio(img.width, img.height, ratio)) {
            const message = typeof requirementErrorMessage?.invalidRatio === 'function'
              ? requirementErrorMessage?.invalidRatio(ratio)
              : `Image ratio should be ${ratio}`;
            setRejectReasons([message]);
            return;
          }

          setRejectReasons([]);
          onChangeImage?.(_fileUrl);
          setFileUrl(_fileUrl);
        });
      };
    },
    []
  );

  const hasMaxSize = typeof maxSize === 'number';
  const maxImageSize = hasMaxSize ? Math.pow(1024, 2) * maxSize : undefined;
  const maxSizeLabel = humanFileSize(maxImageSize);
  const acceptLabel = imageAcceptLabel(accept);
  const acceptedImage = safeArray(accept).reduce(
    (_, __) => ({ ..._, [ImageMimeType[__]]: [] }),
    {}
  );

  const dropzone = useDropzone({
    ...props,
    multiple: false,
    maxSize: maxImageSize,
    accept: acceptedImage,
    onDrop: ([acceptedFiles], fileRejections) => {
      setFileUrl(undefined);
      if (hasArray(fileRejections)) {
        const errorRejection = getErrorRejection(
          fileRejections,
          requirementErrorMessage,
          {
            maxSize: maxSizeLabel,
            accept: acceptLabel
          }
        );
        setRejectReasons(errorRejection);
      } else {
        handleAcceptedImage(acceptedFiles);
      }
    }
  });

  const renderRejectReasonItem = (item: string) => {
    return <HelperText error={isError} key={item}>{item}</HelperText>
  };

  const renderRequirementItem = (item: ReactNode, index: number) => {
    return (
      <li key={index}>
        <Typography variant="caption">
          {item}
        </Typography>
      </li>
    );
  };

  const requirementsPlaceholder = [
    hasMaxSize && <>Size: Max size of image is <strong>{maxSizeLabel}</strong></>,
    ratio && <>Image Ratio is <strong>{ratio}</strong></>,
    hasArray(accept) && <>Image format: only allow <strong>{acceptLabel}</strong></>
  ].filter((_) => _);

  return (
    <div className="relative col-span-2" ref={forwardedRef}>
      {(!!label) && <Label error={isError} {...{ required }}>{label}</Label>}
      <div className="flex flex-row gap-6">
        <div
          style={!ratio ? {} : { aspectRatio: ImageRatio[ratio] }}
          className={twMerge(
            Theme.placeholer,
            props.disabled && "cursor-not-allowed",
            isError && Theme.placeholerError,
            hasFile && "hidden",
            className,
          )}
          {...dropzone.getRootProps()}
        >
          <PlaceholderIcon />
          <Typography variant="caption" className="text-center">
            {(!placeholder && hasMaxSize)
              ? `Photo size must be less than ${maxSizeLabel}`
              : placeholder
            }
          </Typography>
          <Button
            disabled={props.disabled}
            variant="outlined"
            size="xs"
          >
            {buttonText}
          </Button>
          <input {...dropzone.getInputProps()} />
        </div>
        <div className={twMerge("relative", !hasFile && "hidden")}>
          <Thumbnail
            className={"min-h-[64px]"}
            style={!ratio ? {} : { aspectRatio: ImageRatio[ratio] }}
            src={fileUrl}
          />
          {(!props.disabled) && (
            <div className="absolute flex gap-2 bottom-4 left-4 flrx-row">
              <ActionButton
                className="shadow-lg"
                onClick={() => dropzone.open()}
                variant="edit"
              />
              <ActionButton
                className="shadow-lg"
                onClick={() => setFileUrl(undefined)}
                variant="delete"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center flex-1">
          <ul className="pl-3 space-y-3 text-gray-500 list-disc">
            {typeof requirements === 'function'
              ? requirements({ maxSize: maxSizeLabel, accept: acceptLabel, ratio }).map(renderRequirementItem)
              : requirementsPlaceholder.map(renderRequirementItem)
            }
          </ul>
        </div>
      </div>
      {rejectReasons.length > 0
        ? <>{rejectReasons.map(renderRejectReasonItem)}</>
        : <>{(!!helperText) && renderRejectReasonItem(helperText)}</>
      }
    </div>
  );
}

export const ImageUpload = forwardRef(_ImageUpload);
