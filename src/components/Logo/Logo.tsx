import styled from "styled-components";
import { logo } from "../../assets/images";

export const Logo = () => {
  return <Image src={logo} alt="Logo" />;
};

const Image = styled("img")`
  height: 80px;
  cursor: pointer;
`;
