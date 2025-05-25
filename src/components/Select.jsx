import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`
          w-full px-4 py-2 bg-white border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
          transition ${className}
        `}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
