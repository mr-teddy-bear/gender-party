import { FC, useState } from "react";
import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useVote } from "../../../hooks/useVote";
import { guys } from "../../../utils/commonFunctions";

type Props = {
  imgSrc: string;
  qNumber: number;
  userInfo: string;
  isActive?: boolean;
  onNextClick: () => void;
};

export const SingleVote: FC<Props> = ({
  imgSrc,
  qNumber,
  isActive,
  onNextClick,
  userInfo,
}) => {
  const { addVote, isAddVoteLoading } = useVote(onNextClick);
  const [answer, setAnswer] = useState("");

  const handleClick = () => {
    addVote({ questionId: qNumber, user: userInfo, voteId: +answer });
  };

  return (
    <Wrapper isActive={isActive}>
      <Title>Фото #{qNumber}</Title>
      <Image src={imgSrc} />
      <FormControl size="small" sx={{ m: 1, minWidth: 140, width: "100%" }}>
        <InputLabel id="status-select">Кто это?</InputLabel>
        <Select
          labelId="status-select"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          autoWidth
          label="Кто это?"
        >
          {guys.map(option => (
            <MenuItem key={option.rightId} value={option.rightId}>
              <em>{option.name}</em>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <LoadingButton
        color="primary"
        loading={isAddVoteLoading}
        variant="contained"
        fullWidth
        type="submit"
        onClick={handleClick}
        disabled={!answer}
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
