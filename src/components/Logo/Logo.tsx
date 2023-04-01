import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../../assets/images";

export const Logo = () => {
  const navigate = useNavigate();
  return <Image onClick={() => navigate("/")} src={logo} alt="Logo" />;
};

const Image = styled("img")`
  height: 80px;
  cursor: pointer;
`;
