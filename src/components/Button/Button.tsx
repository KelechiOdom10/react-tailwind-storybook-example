import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex items-center justify-center text-sm gap-2 font-semibold border-none rounded-md transition-colors disabled:opacity-60 focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-indigo-500 text-white hover:bg-indigo-600",
        tertiary:
          "bg-white hover:bg-gray-50 text-gray-900 border-gray-200 border focus:ring-offset-0 focus:ring-gray-700",
        danger: "bg-red-500 text-white",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        true: "rounded-full",
      },
      size: {
        xs: "px-3 py-1.5 text-xs",
        sm: "px-3.5 py-2 text-sm",
        md: "h-9 px-5 py-2",
        lg: "h-10 px-5 py-2.5",
        icon: "flex justify-center min-h-[30px] min-w-[30px]",
      },
      isLoading: {
        true: "opacity-80 cursor-wait font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export type VariantType = VariantProps<typeof buttonStyles> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantType;

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  size = "md",
  fullWidth,
  variant,
  leftIcon,
  rightIcon,
  rounded,
  className,
  ...props
}) => {
  return (
    <button
      className={buttonStyles({
        fullWidth,
        size,
        variant,
        isLoading,
        rounded,
        className,
      })}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};
