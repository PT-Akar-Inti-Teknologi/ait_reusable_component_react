import { Controller, useFormContext } from "react-hook-form";
import { ImageUpload } from "~/components/ImageUpload";
import { useDisabledField } from "../HookForm";
import { InputImageUploadProps } from "./InputImageUpload.types";

export function InputImageUpload({
  onChangeValue,
  disabled,
  name,
  rule,
  ...props
}: Readonly<InputImageUploadProps>) {

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
          <ImageUpload
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
