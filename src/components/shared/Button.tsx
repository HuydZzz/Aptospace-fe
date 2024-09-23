import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "sm" | "md" | "lg"; // Thêm prop variant để xác định kích thước
  className?: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  variant = "md",
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "sm":
        return "h-[35px]";
      case "lg":
        return "h-[60px]";
      case "md":
      default:
        return "h-[47px]";
    }
  };

  return (
    <button {...props} className={`${className} relative`}>
      <div
        className={`bg-white flex items-center justify-center font-bold w-full px-6 cursor-pointer ${getVariantClass()}`}
      >
        {children}
      </div>
      <div
        className={`absolute top-1 left-1 w-full px-6 py-[17px] bg-transparent border border-white ${getVariantClass()}`}
      ></div>
    </button>
  );
};

export default Button;
