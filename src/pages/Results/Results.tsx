import styled from "styled-components";
import { useGetAllVotes } from "../../hooks/useGetGame";
import { useMemo } from "react";
import {
  checkPrizer,
  moreAnswersOnQuestions,
} from "../../utils/commonFunctions";

export const Results = () => {
  const { allVotes } = useGetAllVotes();

  const topVotes = useMemo(() => {
    if (!allVotes?.data) return [];
    return moreAnswersOnQuestions(allVotes.data.votes);
  }, [allVotes?.data]);

  /*PRIZERS SEARCH START */
  /*PRIZERS SEARCH START */
  const prizer = useMemo(() => {
    if (!allVotes?.data) return "Пока никого";
    const prizers = checkPrizer(allVotes.data.votes);
    if (!prizers.length) return "Пока никого";

    const newPrizersArr: { name: string; count: number }[] = prizers.map(
      (item: [string, number]) => {
        return {
          name: item[0],
          count: item[1],
        };
      },
    );
    const sortArr = newPrizersArr.sort((a, b) => (a.count > b.count ? -1 : 1));
    if (sortArr.length > 2) {
      return (
        <>
          <PlaceRow>
            <span>
              Место 1: <b>{sortArr[0].name}</b>
            </span>
            <span>
              Правильные ответы: <b>{sortArr[0].count}</b>
            </span>
          </PlaceRow>
          <PlaceRow>
            <span>
              Место 2: <b>{sortArr[1].name}</b>
            </span>
            <span>
              Правильные ответы: <b>{sortArr[1].count}</b>
            </span>
          </PlaceRow>
          <PlaceRow>
            <span>
              Место 3: <b>{sortArr[2].name}</b>
            </span>
            <span>
              Правильные ответы: <b>{sortArr[2].count}</b>
            </span>
          </PlaceRow>
        </>
      );
    }
    if (sortArr.length > 1) {
      return (
        <>
          <PlaceRow>
            <span>
              Место 1: <b>{sortArr[0].name}</b>
            </span>
            <span>
              Правильные ответы: <b>{sortArr[0].count}</b>
            </span>
          </PlaceRow>
          <PlaceRow>
            <span>
              Место 2: <b>{sortArr[1].name}</b>
            </span>
            <span>
              Правильные ответы: <b>{sortArr[1].count}</b>
            </span>
          </PlaceRow>
        </>
      );
    }

    return (
      <PlaceRow>
        <span>
          Место 1: <b>{sortArr[0].name}</b>
        </span>
        <span>
          Правильные ответы: <b>{sortArr[0].count}</b>
        </span>
      </PlaceRow>
    );
  }, [allVotes?.data]);

  return (
    <ResultsWrapper>
      <Row>
        <div>Всего голосов: {allVotes?.data?.votes?.length || 0}</div>
        <div>Должно быть: 528</div>
      </Row>

      <Row>
        <div>Призер</div>
        <div>{prizer}</div>
      </Row>

      {topVotes?.length && (
        <>
          {topVotes.map(vote => {
            if (!vote.name || !vote.percent) return null;
            return (
              <PercentRow key={vote.questionId}>
                <div>Вопрос №{vote.questionId}</div>
                <div>За {vote.name}</div>
                <div>{vote.percent}%</div>
              </PercentRow>
            );
          })}
        </>
      )}
    </ResultsWrapper>
  );
};
/*PRIZERS SEARCH END */
/*PRIZERS SEARCH END */

const ResultsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Row = styled("div")`
  width: 100%;
  padding: 20px;
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PercentRow = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  > div {
    padding: 20px;
    border: 1px solid black;
  }
`;

const PlaceRow = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px;
`;
