import React from "react";

export default function InputField({ type, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
