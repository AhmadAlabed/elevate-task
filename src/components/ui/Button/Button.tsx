import { ButtonHTMLAttributes, ReactNode } from "react";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button" | "reset";
  className?: string;
  children: ReactNode;
}
const Button = (props: IButtonProps) => {
  const { type, className = "", children, ...rest } = props;
  return (
    <>
      <button
        type={type}
        className={`border border-spacing-1 px-3 py-1 flex gap-1 hover:opacity-80  ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
