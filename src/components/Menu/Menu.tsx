import { AppBar, Box, Toolbar } from "@mui/material";
import styled from "styled-components";
import { Logo } from "../Logo";

export const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Logo />
          <Text>Gender Party</Text>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const Text = styled("h2")`
  font-size: 2rem;
`;
