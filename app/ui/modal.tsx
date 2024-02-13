'use client';
import { ReactNode, MouseEvent } from 'react';


export default function Modal({ isOpen, onClose, children }: {
    isOpen: boolean, onClose: () => void, children: ReactNode;
}) {

    if (!isOpen) return null;

    const handleInnerClick = (e: MouseEvent<HTMLDivElement>) => {
        // Prevent the click event from reaching the outer div
        e.stopPropagation();
    };

    return (
        <div
            onClick={onClose}
            className='fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-sm flex items-center justify-center shadow-md z-20 '
        >
                {children}
        </div>
    );
}