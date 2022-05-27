import styled from "styled-components";

export const PaperWhite = styled.div<{ padding?: string }>`
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  padding: ${({ padding }) => padding || "40px 30px"};
`;
