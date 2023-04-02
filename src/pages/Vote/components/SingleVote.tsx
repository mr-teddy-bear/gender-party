import { FC } from "react";
import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

type Props = {
  imgSrc: string;
  qNumber: number;
  isActive?: boolean;
  onNextClick: () => void;
};

export const SingleVote: FC<Props> = ({
  imgSrc,
  qNumber,
  isActive,
  onNextClick,
}) => {
  return (
    <Wrapper isActive={isActive}>
      <Title>Фото #{qNumber}</Title>
      <Image src={imgSrc} />
      <LoadingButton
        color="primary"
        loading={false}
        variant="contained"
        fullWidth
        type="submit"
        onClick={onNextClick}
      >
        Дальше
      </LoadingButton>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ isActive?: boolean }>`
  display: ${props => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Title = styled("h2")`
  color: #000;
  font-size: 1.5rem;
`;

const Image = styled("img")`
  max-width: 90%;
  width: 400px;
`;
