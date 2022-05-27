import styled from "styled-components";
import { Paper, TextField, Typography } from "../../../components";

export const UserStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
`;

export const UserStyledTop = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
`;

export const UserStyledImage = styled.div`
  width: 50%;
  max-width: 300px;
`;

export const UserStyledImg = styled.img`
  width: 100%;
`;

export const UserStyledBio = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserStyledRow = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 20px;
  }
`;

export const UserStyledLabel = styled(Typography)`
  margin-right: 10px;
`;

export const UserStyledValue = styled(Typography)``;

export const UserStyledDesc = styled(Typography)`
  margin: 0 auto;
`;

export const UserStyledSearch = styled(TextField)`
  max-width: 220px;
`;

export const UserStyledHeader = styled.div`
  display: flex;
`;

export const UserStyledResultSearch = styled(Typography)`
  display: inline-block;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.gray};
`;

export const UserStyledPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const UserStyledReposList = styled.ul<{ loading: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  &::before {
    content: "";
    position: absolute;
    width: ${({ loading }) => (loading ? "100%" : "0")};
    height: ${({ loading }) => (loading ? "100%" : "0")};
    background-color: #ffffff80;
  }
`;
