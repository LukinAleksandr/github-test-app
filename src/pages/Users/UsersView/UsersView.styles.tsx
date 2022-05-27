import styled from "styled-components";
import { Typography, TextField, Paper } from "../../../components";
import { PaperProps } from "../../../components/Paper/Paper.types";

export const UsersStyled = styled(Paper)<PaperProps>`
  display: flex;
  flex-direction: column;
  min-height: 700px;
`;

export const Title = styled(Typography)`
  margin-bottom: 30px;
`;

export const ResultSearch = styled(Typography)`
  display: inline-block;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.gray};
`;

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Search = styled(TextField)`
  max-width: 220px;
`;

export const WrapperTop = styled.div`
  display: flex;
`;

export const UsersList = styled.ul<{ loading: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
