import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../../utils/commonFunctions";
import { SingleVote } from "./components/SingleVote";
import styled from "styled-components";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

export const Vote = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(1);
  const navigate = useNavigate();

  const [isShowModal, setIsShowModal] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const name = localStorage.getItem("userInfo")?.split(" ")[0] || "";
      const surname = localStorage.getItem("userInfo")?.split(" ")[1] || "";
      setUserInfo({ name, surname });
      setIsShowModal(false);
    }
  }, []);

  const [userInfo, setUserInfo] = useState<{ name: string; surname: string }>({
    name: "",
    surname: "",
  });

  const handleCloseModal = () => {
    localStorage.setItem("userInfo", `${userInfo.name} ${userInfo.surname}`);
    setIsShowModal(false);
  };

  const handleClick = (id: number) => {
    if (id === questions.length) {
      localStorage.clear();
      navigate("/finishTest");
    } else {
      setActiveQuestion(id + 1);
    }
  };

  return (
    <div>
      {isShowModal && (
        <ModalWithNameWrapper>
          <FormWrapper>
            <TextField
              id="outlined-name"
              label="Ваше Имя"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
            />
            <TextField
              id="outlined-surname"
              label="Ваша Фамилия"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={e =>
                setUserInfo({ ...userInfo, surname: e.target.value })
              }
            />
            <LoadingButton
              color="primary"
              loading={false}
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleCloseModal}
              disabled={!userInfo.name || !userInfo.surname}
            >
              Начать
            </LoadingButton>
          </FormWrapper>
        </ModalWithNameWrapper>
      )}
      {questions.map(question => (
        <SingleVote
          key={question.id}
          imgSrc={question.photo}
          qNumber={question.id}
          isActive={activeQuestion === question.id}
          onNextClick={() => handleClick(question.id)}
          userInfo={`${userInfo.name} ${userInfo.surname}`}
        />
      ))}
    </div>
  );
};

const ModalWithNameWrapper = styled("div")`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled("div")`
  background: #fff;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
`;
