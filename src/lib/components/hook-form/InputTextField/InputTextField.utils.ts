import {
  FieldError,
  FieldErrorsImpl,
  Merge
} from "react-hook-form";

import {
  emailRegExp
} from "~/utils";

export function getHelperTextMessage(
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
  props?: { helperText?: string }
) {
  if (!error) {
    return props?.helperText;
  }
  const errorMessage = error?.message?.toString();
  if (!errorMessage) {
    return 'Field cannot be empty';
  }
  return errorMessage;
};

export function getInputType(type?: string) {
  switch (type) {
    case 'currency':
      return 'text';

    case 'phone':
      return 'number';
  }
  return type ?? 'text';
}

export function validateForm(type?: string, required?: any) {
  return (value: any) => {
    if (!required && !value) {
      return (undefined);
    }
    if (typeof value === 'string' && required && !value?.trim()) {
      return "Field cannot be empty";
    }
    if (type === 'email') {
      const isValid = emailRegExp.test(value);
      return isValid || 'The email format you’re using is incorrect.';
    }
    if (type === 'phone') {
      const isValid = +value > 0;
      return isValid || 'Minimum character is 1';
    }
    return (undefined);
  };
}
