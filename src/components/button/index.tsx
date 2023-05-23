import { FC } from "react";
import "./index.scss";

interface ButtonProp {
  size: "small" | "medium" | "big";
  children: React.ReactNode;
  action?: any;
  priority?: "main" | "secondary";
  phase?: "focus" | "short" | "focus2" | "long";
}

const Button: FC<ButtonProp> = ({
  size = "small",
  children,
  action,
  priority = "secondary",
  phase = "focus",
}) => {
  return (
    <button
      onClick={action}
      className={`button button-${size} button-${priority} button-${phase}`}
    >
      {children}
    </button>
  );
};

export default Button;
