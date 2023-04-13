import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiRoute, commonHeaders } from "../utils/api";
import { useContext } from "react";
import { Context } from "../utils/context";

export type ResType = {
  message: string;
  votes: Vote[];
};

export type Vote = {
  questionId: number;
  user: string;
  voteId: number;
};

export const useGetAllVotes = () => {
  const context = useContext(Context);

  const { data: allVotes, isFetching: isAllVotesLoading } = useQuery(
    ["getAllVotes"],
    () => axios.get<ResType>(`${apiRoute}/votes`, commonHeaders()),
    {
      onError() {
        context?.setMessage({
          severity: "error",
          text: "Something went wrong",
        });
      },
    },
  );

  return { allVotes, isAllVotesLoading };
};
