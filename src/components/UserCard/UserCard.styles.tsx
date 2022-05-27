import styled from "styled-components";
import { Paper } from "../Paper";
import { Typography } from "../Typography";

export const UserCardStyles = styled(Paper)`
  box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.1);
`;
export const UserCardTop = styled.div`
  width: 188px;
  height: 188px;
  border-radius: 4px;
  overflow: hidden;
`;
export const UserCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

export const UserCardText = styled(Typography)``;
