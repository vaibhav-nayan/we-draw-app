"use client";

import { ReactNode } from "react";

interface InputProps {
  className?: string;
  type: "text" | "password";
  placeholder: string;
  label: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ className, type, placeholder, label, onChange}: InputProps) => {
  return (
    <div className="flex flex-col justify-center text-shadow-xs">
        <p className="text-gray-600 text-sm">{label}</p>
        <input
            type={type}
            placeholder={placeholder}
            className={`{className} p-2 border text-gray-500 border-gray-300 rounded-md shadow`}
            onChange={onChange}
        >
        </input>
    </div>
  );
};
