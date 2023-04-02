import { useMemo } from "react";
import styled from "styled-components";

const max = 3;
const min = 1;

export const Finish = () => {
  const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;

  const weWillText = useMemo(() => {
    if (randomCount === 1) {
      return "Мальчик и Девочка";
    }
    if (randomCount === 2) {
      return "Два мальчика";
    }

    if (randomCount === 3) {
      return "Две девочки";
    }
  }, [randomCount]);

  console.log(randomCount);
  return (
    <Wrapper>
      <span style={{ color: "#001eff" }}>Поздравляем 😃 </span>

      <span>
        А теперь предлагаем наконец-то отложить телефон 😅 и хорошо провести
        время!
      </span>

      <span>Помните: если вы здесь, значит мы вас любим 😘</span>

      <span style={{ fontSize: "1rem", color: "#e100ff" }}>
        P.S. У нас будут {weWillText}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  color: black;
  text-align: center;
  line-height: 1.5;
  gap: 15px;
`;
