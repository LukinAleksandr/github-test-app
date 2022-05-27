import styled from "styled-components";
import { Typography } from "../Typography";

export const ReposItemStyled = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.gray};
`;

export const ReposItemName = styled(Typography)``;
export const ReposItemCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ReposItemText = styled(Typography)``;
