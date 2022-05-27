import React from "react";
import { MainContainer, MainContent, Wrapper } from "./MainLayout.styles";

import { Container } from "../../components/Container";
import { Outlet } from "react-router";

export const MainLayout: React.FC = () => (
  <>
    <MainContainer>
      <Container>
        <Wrapper>
          <MainContent>
            <Outlet />
          </MainContent>
        </Wrapper>
      </Container>
    </MainContainer>
  </>
);
