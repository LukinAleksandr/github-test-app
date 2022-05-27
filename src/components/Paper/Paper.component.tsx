import React from "react";
import { PaperWhite } from "./Paper.styles";
import { PaperProps } from "./Paper.types";

export const Paper: React.FC<PaperProps> = ({ children, ...props }) => {
  return <PaperWhite {...props}>{children}</PaperWhite>;
};
