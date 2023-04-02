import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { gradient } from "../../assets/images";
import { Finish } from "../../pages/Finish";
import { Vote } from "../../pages/Vote";

import { Menu } from "../Menu";

export const MainRouter = () => {
  return (
    <Wrapper>
      <Menu />
      <Content>
        <Routes>
          <Route path="" element={<Vote />} />
          <Route path="finishTest" element={<Finish />} />
        </Routes>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  width: 100%;
  min-height: 100vh;
  background: url(${gradient});
  background-size: cover;
`;

const Content = styled("div")`
  padding: 30px;
`;
