import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { Context } from "../utils/context";
import { apiRoute, commonHeaders } from "../utils/api";

type MutateDataType = {
  user: string;
  questionId: number;
  voteId: number;
};

function useVote(onNextClick: () => void) {
  const context = useContext(Context);
  const { mutate: addVote, isLoading: isAddVoteLoading } = useMutation(
    (data: MutateDataType) =>
      axios.post(`${apiRoute}/votes`, data, commonHeaders()),
    {
      onSuccess() {
        context?.setMessage({
          severity: "success",
          text: "Молодец!",
        });
        onNextClick();
      },
      onError() {
        context?.setMessage({
          severity: "error",
          text: "Что-то не так! Позови Макса!",
        });
      },
    },
  );

  return { addVote, isAddVoteLoading };
}

export { useVote };
