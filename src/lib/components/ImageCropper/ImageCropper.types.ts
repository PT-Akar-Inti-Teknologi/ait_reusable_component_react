export type ImageCropperProps = {
    aspect: number;
    onCropped: (file: File) => void;
};