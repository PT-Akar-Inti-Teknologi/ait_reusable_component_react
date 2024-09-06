
export async function getFileDataUrl(file?: File): Promise<string | undefined> {
  if (!file) {
    return Promise.resolve(undefined);
  }

  return new Promise((resolve) => {

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const fileUrl = reader.result?.toString();
      resolve(fileUrl);
    }
    reader.onerror = () => resolve(undefined);
  });
}
