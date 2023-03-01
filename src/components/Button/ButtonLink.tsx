import { FC, HTMLAttributes } from "react";
import { VariantType } from "./Button";

export type ButtonLinkProps = HTMLAttributes<HTMLAnchorElement> & VariantType;

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
