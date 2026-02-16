import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: any) {
  return (
    <input
      {...props}
      className="
        w-full
        rounded-lg
        border border-[color:var(--border)]
        bg-[color:var(--surface)]
        px-3 py-2
        text-sm
        outline-none
        focus:ring-2
        focus:ring-[color:var(--accent)]
        focus:border-transparent
        transition
      "
    />
  );
}
