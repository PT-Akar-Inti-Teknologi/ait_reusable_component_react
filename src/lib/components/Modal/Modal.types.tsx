export interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
}