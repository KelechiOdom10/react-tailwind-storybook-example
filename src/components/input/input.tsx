import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const styles = cva(
  "w-full text-left rounded-md text-md text-gray-800 border border-gray-200 block focus:ring-gray-800 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
  {
    variants: {
      size: {
        sm: "text-sm leading-8 h-9 px-3",
        md: "text-md leading-10 h-10 px-3.5",
        lg: "text-lg leading-12 h-12 px-4",
      },
      disabled: {
        true:
          "cursor-not-allowed bg-gray-100 placeholder:text-gray-600 opacity-50 ",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof styles> & {
    helperText?: ReactNode;
    error?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { helperText, size = "sm", required, error, disabled, id, ...props },
    ref
  ) => {
    return (
      <div className="flex-col space-y-1.5 tracking-wide">
        <input
          id={id}
          ref={ref}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby="errMsg"
          className={styles({ size, disabled })}
          {...props}
        />
        {error && (
          <p id="errMsg" className="text-sm text-red-500">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
