import { FC, ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex items-center justify-center text-sm gap-2 font-semibold relative rounded-md transition-colors focus:outline-none  disabled:opacity-60 focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed",
  {
    variants: {
      variant:{
        primary:'',
        secondary: '',
        tertiary:'',
        danger: ''
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        true: "rounded-full",
      },
      size: {
        sm: "px-3 py-1.5 leading-4" /** For backwards compatibility */,
        md: "h-9 px-4 py-2",
        lg: "h-10 px-5 py-2.5",
        icon: "flex justify-center min-h-[30px] min-w-[30px]",
      },
      isLoading: {
        true: "opacity-50 cursor-wait",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
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
