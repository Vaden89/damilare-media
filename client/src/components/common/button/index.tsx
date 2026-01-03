import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  children,
  disabled,
  loading,
  variant,
}: ButtonProps) => {
  const styling = `px-8 py-4 rounded-full ${variant === "primary" && "bg-[#1F1E1E90] text-white"}  ${loading && "opacity-50 cursor-wait"}`;

  return (
    <button disabled={disabled || loading} className={styling}>
      {children}
    </button>
  );
};
