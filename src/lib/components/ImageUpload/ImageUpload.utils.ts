import {
  FileError,
  FileRejection
} from "react-dropzone";
import {
  safeArray
} from "~/utils";
import {
  ImageAcceptType,
  ImageRatioType,
  RequirementErrorMessage,
  RequirementParam
} from "./ImageUpload.types";

export function imageAcceptLabel(accept?: ImageAcceptType[]) {
  return safeArray(accept).map((_) => `.${_}`).join(' / ');
}

export function getImageProperty(imageUrl: string): Promise<HTMLImageElement | undefined> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => resolve(img);
    img.onerror = () => resolve(undefined);
  });
}

export async function validateImageRatio(imageUrl?: string, expected?: ImageRatioType) {

  if (!imageUrl || !expected) {
    return true;
  }

  const imageObj = await getImageProperty(imageUrl);
  if (!imageObj) {
    return false;
  }

  const [expectedWidth = 1, expectedHeight = 1] = expected.split(':').map((_) => parseInt(_));
  const expectedRatio = (expectedWidth / expectedHeight).toFixed(1);
  const imageRatio = (imageObj.width / imageObj.height).toFixed(1);
  return expectedRatio === imageRatio;
}

export function getRejectReason(
  requirementCallback?: RequirementErrorMessage,
  requirementMessage?: RequirementParam
) {
  return (fileError: FileError) => {
    if (fileError.code === 'file-invalid-type') {
      const acceptLabel = requirementMessage?.accept;
      const message = typeof requirementCallback?.invalidType === 'function'
        ? requirementCallback.invalidType(acceptLabel)
        : `Image format must be ${acceptLabel}`;
      return message;
    }
    if (fileError.code === 'file-too-large') {
      const maxSizeLabel = requirementMessage?.maxSize;
      const message = typeof requirementCallback?.tooLarge === 'function'
        ? requirementCallback.tooLarge(maxSizeLabel)
        : `Maximum image size is ${maxSizeLabel}`;
      return message;
    }
    return fileError.message;
  };
}

export function getErrorRejection(
  fileRejections: FileRejection[],
  requirementCallback?: RequirementErrorMessage,
  requirementMessage?: RequirementParam
) {
  return fileRejections.reduce(
    (stack, item) => {
      const errors = item.errors.map(getRejectReason(requirementCallback, requirementMessage));
      return [...stack, ...errors];
    },
    [] as string[]
  );
}
