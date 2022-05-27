import React, { PropsWithChildren } from "react";
import { ContainerStyled } from "./Container.styles";

interface Props extends PropsWithChildren<unknown> {}

export const Container: React.FC<Props> = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);
