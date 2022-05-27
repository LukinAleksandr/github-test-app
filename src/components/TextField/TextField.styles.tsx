import styled, { css } from "styled-components";
import { TextFieldProps } from "./TextField.types";
const HeightInput = "35px";

const sharedInput = css<TextFieldProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};
  cursor: ${({ disabled }) => (disabled ? "none" : "text")};
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  outline: none;
`;

export const Input = styled.input<TextFieldProps>`
  ${sharedInput};
  height: ${HeightInput};
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme, error }) => (error ? theme.red : theme.gray)};
  border-radius: 8px;
  transition: border 0.3s;
  padding: 14px;

  ${({ readonly }) =>
    readonly &&
    `
    border: none;
    pointer-events: none;
    background-color: transparent;
    padding: 14px 0px;
  `}
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.outline};
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

export const Wrapper = styled.div<TextFieldProps>`
  ${sharedInput};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  display: inline-flex;
  flex-direction: column;
`;

export const Inner = styled.div<TextFieldProps>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.gray};
`;

export const Error = styled.span`
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.red};
`;
