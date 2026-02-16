import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = "", ...props }: any) {
  return (
    <button
      {...props}
      className={`
        bg-[color:var(--accent)]
        text-white
        px-4 py-2
        rounded-lg
        text-sm font-medium
        transition-all
        hover:opacity-90
        disabled:opacity-50
        shadow-sm
        ${className}
      `}
    >
      {children}
    </button>
  );
}

