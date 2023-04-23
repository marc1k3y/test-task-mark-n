import React from "react";

interface Props {
  labelAlign: "left" | "right" | "center"
  size: "small" | "medium" | "large"
  type: "text" | "number" | "email" | "password"
  label: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MyInput = ({ label, value, onChange, type, labelAlign, size, }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: labelAlign }}>{label}</div>
      <input type={type} value={value} onChange={onChange} />
    </div>
  )
}