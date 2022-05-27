import { forwardRef } from "react";
import { Wrapper, Error, Input, Label, Inner } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      message,
      className,
      fullWidth = true,
      disabled,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper fullWidth={fullWidth} disabled={disabled} className={className}>
        {label && <Label>{label}</Label>}
        <Inner fullWidth={fullWidth}>
          <Input
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            ref={ref}
            error={error}
            {...props}
          />
        </Inner>
        {error && <Error>{message}</Error>}
      </Wrapper>
    );
  }
);
