import { cleanObject } from "./object.utils";

export function convertFormData<T extends Record<string, any>>(payload: T, skipTypeCheckings?: string[]) {

  const cleanPayload = cleanObject(payload);
  const formData = new FormData();
  Object.entries(cleanPayload).forEach(([key, value]) => {
    let _value = value;
    if (!skipTypeCheckings?.includes(key)) {
      _value = typeof value === 'object'
        ? JSON.stringify(value)
        : value;
    }
    formData.append(key, _value);
  });
  return formData;
}
