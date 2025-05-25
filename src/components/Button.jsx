import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        px-4 py-2 rounded-lg font-medium
        transition-shadow shadow-sm hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
        ${bgColor} ${textColor} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
