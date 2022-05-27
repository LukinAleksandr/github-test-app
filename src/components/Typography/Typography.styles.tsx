import styled from "styled-components";

export const TypographyH2 = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ color, theme }) => color ?? theme.darkBlue};
`;

export const TypographyH1Bold = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  color: ${({ color, theme }) => color ?? theme.darkBlue};
`;

export const TypographyBody1 = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ color, theme }) => color ?? theme.darkBlue};
`;

export const TypographyDefault = styled.div`
  font-weight: 400;
  color: ${({ color, theme }) => color || theme.darkBlue};
`;

export const TypographyButton = styled.div<{ active?: boolean }>`
  font-weight: 700;
  color: ${({ color, theme, active }) =>
    color || active ? theme.darkBlue : theme.green};
`;

export const TypographySubButton = styled.div`
  font-size: 12px;
  line-height: 15.15px;
  font-weight: 400;
  color: ${({ color, theme }) => color || theme.gray};
`;

export const TypographyAdminName = styled.div`
  font-size: 16px;
  line-height: 19.5px;
  font-weight: 600;
  color: ${({ color, theme }) => color || theme.darkBlue};
`;

export const TypographyTitle = styled.div`
  font-size: 26px;
  line-height: 32.71px;
  font-weight: 700;
  color: ${({ color, theme }) => color || theme.darkBlue};
`;

export const TypographyQuestion = styled.div`
  font-size: 16px;
  line-height: 19.5px;
  font-weight: 600;
  color: ${({ color, theme }) => color || theme.darkBlue};
`;
