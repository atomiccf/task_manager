import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({  children, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${props.className || ''}`}
        >
            {children}
        </button>
    )
}
