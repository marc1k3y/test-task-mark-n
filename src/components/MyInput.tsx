import React from "react";


interface Props {
  label: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: "text" | "number" | "email" | "password"
  labelAlign: "left" | "right" | "center"
  size: "small" | "medium" | "large"
  bgColor: string
  capitalize?: boolean
}

function setSize(size: "small" | "medium" | "large") {
  switch (size) {
    case "small":
      return { fontSize: "0.75rem", padding: "0 2px" }
    case "medium":
      return { fontSize: "1.25rem", padding: "0 5px" }
    case "large":
      return { fontSize: "2rem", padding: "5px 10px" }
    default:
      return { fontSize: "1.25rem", padding: "0 5px" }
  }
}

export const MyInput = ({ label, value, onChange, type, labelAlign, size, bgColor, capitalize }: Props) => {
  const { fontSize, padding }: { fontSize: string, padding: string } = setSize(size);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
      <div style={{ textAlign: labelAlign, fontSize: fontSize }}>{label}</div>
      <input type={type} value={value} onChange={onChange} style={{ borderRadius: "5px", border: "none", outline: "none", backgroundColor: bgColor, fontSize: fontSize, padding: padding, textTransform: capitalize ? "capitalize" : "none", width: "60%", textAlign: "center" }} />
    </div>
  );
}