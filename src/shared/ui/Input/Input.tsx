import React, { InputHTMLAttributes } from 'react';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
    return <input {...props} className={`px-3 py-2 border rounded text-black `}/>;
};
