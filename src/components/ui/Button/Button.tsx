import { ButtonHTMLAttributes, ReactNode } from "react";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button" | "reset";
  variant?: "text" | "contained" | "outlined" | "containedReversed";
  className?: string;
  children: ReactNode;
}
const Button = (props: IButtonProps) => {
  const { type, className = "", variant = "text", children, ...rest } = props;
  const variantStyles = {
    text: "text-skin-base hover:opacity-80",
    contained: "bg-gray-100 text-gray-700 hover:opacity-80",
    outlined: "border border-spacing-1 text-skin-base hover:opacity-80",
    containedReversed: "bg-gray-600 text-gray-50 hover:opacity-80",
  };
  const mainStyles =
    "px-5 py-2.5 flex gap-1 hover:opacity-80 text-sm font-medium";
  return (
    <>
      <button
        type={type}
        className={`${mainStyles} ${variantStyles[variant]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
