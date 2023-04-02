import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../../utils/commonFunctions";
import { SingleVote } from "./components/SingleVote";

export const Vote = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(1);
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    if (id === questions.length) {
      navigate("/finishTest");
    } else {
      setActiveQuestion(id + 1);
    }
  };

  return (
    <div>
      {questions.map(question => (
        <SingleVote
          imgSrc={question.photo}
          qNumber={question.id}
          isActive={activeQuestion === question.id}
          onNextClick={() => handleClick(question.id)}
        />
      ))}
    </div>
  );
};
