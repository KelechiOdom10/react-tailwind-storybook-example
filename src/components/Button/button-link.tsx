import { AnchorHTMLAttributes, FC } from "react";
import { VariantType, buttonStyles } from "./button";

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantType;

export const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  href,
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
    <a
      href={href}
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
    </a>
  );
};
