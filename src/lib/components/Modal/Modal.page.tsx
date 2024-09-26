import React from 'react';
import { ModalProps } from './Modal.types';


const ModalComponent: React.FC<ModalProps> = ({
                                                  isOpen,
                                                  onRequestClose,
                                                  onConfirm,
                                                  title,
                                                  message,
                                                  confirmText,
                                                  cancelText
                                              }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="p-6 text-center text-black bg-white rounded-lg w-80">
                <div className="flex justify-center my-4">
                    <img width="96" height="96" src="https://img.icons8.com/emoji/192/warning-emoji.png"
                         alt="warning-emoji"/>
                </div>
                <h2 className="mb-1 text-xl font-bold text-primary">{title}</h2>
                <p className="mb-6 text-xs">{message}</p>
                <div className="grid grid-cols-2 gap-2">
                    <button
                        className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-500"
                        onClick={onRequestClose}
                    >
                        {cancelText}
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;