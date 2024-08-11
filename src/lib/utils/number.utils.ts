
export function cleanNumber(value?: string) {
  if (value !== undefined) {
    const cleanNumber = value?.toString()?.replace(/[^\d]/g, '');
    return isNaN(+cleanNumber) ? undefined : +cleanNumber;
  }
  return (undefined);
}

export function formatCurrency(inputEl?: HTMLInputElement | null) {
  if (inputEl?.value !== undefined) {
    const _cleanNumber = cleanNumber(inputEl.value);
    if (_cleanNumber !== undefined) {
      inputEl.value = _cleanNumber.toLocaleString('id-ID')
    }
  }
}

const units = ['B', 'KB', 'MB', 'GB', 'TB'];
export function humanFileSize(size?: number) {

  if (size === undefined) {
    return `0 ${units[0]}`;
  }

  const humanSize = units.reduce(
    (stack, item, index) => {
      const value = size / Math.pow(1024, index);
      return Math.round(value) > 0
        ? { unit: item, value }
        : stack;
    },
    { value: size, unit: units[0] }
  );
  const valueSize = humanSize.value.toFixed(1).replace('.0', '');
  return `${valueSize} ${humanSize.unit}`;
}
