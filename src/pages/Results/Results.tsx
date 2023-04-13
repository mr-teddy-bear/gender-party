import styled from "styled-components";
import { useGetAllVotes } from "../../hooks/useGetGame";
import { useMemo } from "react";
import { checkPrizer } from "../../utils/commonFunctions";

export const Results = () => {
  const { allVotes } = useGetAllVotes();

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
    if (sortArr.length > 1 && sortArr[0].count === sortArr[1].count) {
      return `${sortArr[0].name} и ${sortArr[1].name}`;
    }
    return sortArr[0].name;
  }, [allVotes?.data]);

  console.log("allVotes", allVotes);
  return (
    <ResultsWrapper>
      <Row>
        <div>Призер</div>
        <div>{prizer}</div>
      </Row>
    </ResultsWrapper>
  );
};

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
