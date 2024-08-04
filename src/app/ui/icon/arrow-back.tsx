'use client';

import { useRouter } from "next/navigation";
import React from "react";

interface ArrowBackIconButtonProps {
    className?: string;
}

const ArrowBackIconButton: React.FC<ArrowBackIconButtonProps> = ({className}) => {
    const router = useRouter();

    const handleBack = () => {
        router.back()
    }
    return (
        <button onClick={handleBack} className="bg-green-100 p-2 rounded-full absolute left-2 top-2 opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        </button>
    )
}

export default ArrowBackIconButton;