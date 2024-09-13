import { Controller, useFormContext } from "react-hook-form";
import { ImageCropUpload } from "~/components/ImageCropUpload";
import { useDisabledField } from "../HookForm";
import { InputImageCropUploadProps } from "./InputImageCropUpload.types";

export function InputImageCropUpload({
  onChangeValue,
  disabled,
  name,
  rule,
  ...props
}: Readonly<InputImageCropUploadProps>) {

  const isDisabled = useDisabledField(name);
  const form = useFormContext();

  return (
    <Controller
      disabled={isDisabled || disabled}
      control={form.control}
      rules={rule}
      name={name}
      render={({ field, fieldState }) => {
        const isError = !!fieldState.error;
        return (
          <ImageCropUpload
            {...props}
            helperText={isError ? fieldState.error?.message?.toString() : props.helperText}
            required={!!rule?.required}
            disabled={field.disabled}
            inputRef={field.ref}
            error={isError}
            value={field.value}
            onChangeValue={(_) => {
              field.onChange(_);
              field.onBlur();
              onChangeValue?.(_);
            }}
          />
        );
      }}
    />
  );
}
