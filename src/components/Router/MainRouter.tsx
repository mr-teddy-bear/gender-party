import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Vote } from "../../pages/Vote";

import { Menu } from "../Menu";

export const MainRouter = () => {
  return (
    <Wrapper>
      <Menu />
      <Content>
        <Routes>
          <Route path="" element={<Vote />} />
        </Routes>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  width: 100%;
  min-height: 100vh;
  background: #f5f7f9;
`;

const Content = styled("div")`
  padding: 30px;
`;
