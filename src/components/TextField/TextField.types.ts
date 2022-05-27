import { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  message?: string;
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  readonly?: boolean;
}
