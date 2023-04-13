import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { deviceSizes } from "../constants";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
} from "../assets/images/photos";
import { Vote } from "../hooks/useGetGame";

export function useTablet() {
  const initValue = window.matchMedia(
    `(max-width: ${deviceSizes.laptop}px)`,
  ).matches;
  const [isTablet, setIsTablet] = useState<boolean>(initValue);

  const handleChange = (event: MediaQueryListEvent) => {
    setIsTablet(event.matches);
  };

  useEffect(() => {
    const mobileMedia = window.matchMedia(
      `(max-width: ${deviceSizes.laptop}px)`,
    );
    mobileMedia.addEventListener("change", handleChange);
    return () => {
      mobileMedia.removeEventListener("change", handleChange);
    };
  }, []);

  return isTablet;
}

export function useMobile() {
  const initValue = window.matchMedia(
    `(max-width: ${deviceSizes.tablet - 1}px)`,
  ).matches;
  const [isMobile, setIsMobile] = useState<boolean>(initValue);

  const handleChange = (event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    const mobileMedia = window.matchMedia(
      `(max-width: ${deviceSizes.tablet - 1}px)`,
    );
    mobileMedia.addEventListener("change", handleChange);
    return () => {
      mobileMedia.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0].toUpperCase()}${
      name.split(" ")[1][0]?.toUpperCase() ||
      name.split(" ")[0][1]?.toUpperCase()
    }`,
  };
}

export function useCheckAuth() {
  const { data: isAuth, isLoading } = useQuery(["checkAuth"], () =>
    localStorage.getItem("authToken"),
  );

  return { isAuth, isLoading };
}

export const gameTypeSwitcher = (gameType: string) => {
  switch (gameType) {
    case "ROUND_ROBIN_DAILY_MATCH":
      return "Every day";

    case "ROUND_ROBIN_WEEKLY_MATCH":
      return "Every 7 days";

    case "ROUND_ROBIN_BIWEEKLY_MATCH":
      return "Every 14 days";

    case "ROUND_ROBIN_MONTHLY_MATCH":
      return "Every 30 days";

    default:
      return "Every day";
  }
};

export const questions = [
  {
    id: 1,
    name: "Роговцов Даник",
    photo: photo1,
  },
  {
    id: 2,
    name: "Кузьмицкий Сергей",
    photo: photo2,
  },
  {
    id: 3,
    name: "Соколовский Андрей",
    photo: photo3,
  },
  {
    id: 4,
    name: "Ляховец Слава",
    photo: photo4,
  },
  {
    id: 5,
    name: "Шедов Анатолий",
    photo: photo5,
  },
  {
    id: 6,
    name: "Ломаченко Даша",
    photo: photo6,
  },
  {
    id: 7,
    name: "Ракомская Аня",
    photo: photo7,
  },
  {
    id: 8,
    name: "Кузьмицкая Снежана",
    photo: photo8,
  },
  {
    id: 9,
    name: "Игнатенко Стас",
    photo: photo9,
  },
  {
    id: 10,
    name: "Шедова Светлана",
    photo: photo10,
  },
  {
    id: 11,
    name: "Тесленок Анастасия",
    photo: photo11,
  },
  {
    id: 12,
    name: "Ракомская Татьяна",
    photo: photo12,
  },
  {
    id: 13,
    name: "Мотуз Дмитрий",
    photo: photo13,
  },
  {
    id: 14,
    name: "Шедов Слава",
    photo: photo14,
  },
  {
    id: 15,
    name: "Соколовская-Шедова Настя",
    photo: photo15,
  },
  {
    id: 16,
    name: "Ракомский Сергей",
    photo: photo16,
  },
  {
    id: 17,
    name: "Тесленок Иван",
    photo: photo17,
  },
  {
    id: 18,
    name: "Ляховец Оля",
    photo: photo18,
  },
  {
    id: 19,
    name: "Соколовская Елена",
    photo: photo19,
  },
  {
    id: 20,
    name: "Кузьмицкая Татьяна",
    photo: photo20,
  },
  {
    id: 21,
    name: "Соколовский Максим",
    photo: photo21,
  },
  {
    id: 22,
    name: "Ракомский Саша",
    photo: photo22,
  },
  {
    id: 23,
    name: "Ракомская Валя",
    photo: photo23,
  },
  {
    id: 24,
    name: "Максимов Влад",
    photo: photo24,
  },
];

export const guys = [
  { name: "Лена Соколовская(Мама Макса)", rightId: 19 },
  { name: "Света Шедова(Мама Насти)", rightId: 10 },
  { name: "Толя Шедов(Папа Насти)", rightId: 5 },
  { name: "Андрей Соколовский(Папа Макса)", rightId: 3 },
  { name: "Таня Ракомская(Тетя Макса)", rightId: 12 },
  { name: "Таня Кузьмицкая(Тетя Насти)", rightId: 20 },
  { name: "Сергей Ракомский(Дядя Макса)", rightId: 16 },
  { name: "Сергей Кузьмицкий(Дядя Насти)", rightId: 2 },
  { name: "Макс", rightId: 21 },
  { name: "Настюша", rightId: 15 },
  { name: "Бабушка Валя", rightId: 23 },
  { name: "Дима Мотуз", rightId: 13 },
  { name: "Снежана(почти Мотуз)", rightId: 8 },
  { name: "Настя Тесленок", rightId: 11 },
  { name: "Оля Ляховец", rightId: 18 },
  { name: "Саша Ракомский", rightId: 22 },
  { name: "Аня Ракомская", rightId: 7 },
  { name: "Слава Ляховец", rightId: 4 },
  { name: "Влад Максимов", rightId: 24 },
  { name: "Ваня Тесленок", rightId: 17 },
  { name: "Стас Игнатенко", rightId: 9 },
  { name: "Данюша", rightId: 1 },
  { name: "Славочка(Лысик)", rightId: 14 },
  { name: "Даша(почти Шедова)", rightId: 6 },
];

export const checkPrizer = (votes: Vote[]) => {
  if (!votes?.length) return "Пока никого";

  const rightAnswers = votes.filter(
    answer => answer.voteId === answer.questionId,
  );

  if (!rightAnswers?.length) return "Никто не ответил правильно";

  const series = rightAnswers.reduce((acc: any, x) => {
    const last_element = acc[acc.length - 1];
    if (last_element && last_element[0] === x.user) {
      last_element[1]++;
    } else {
      acc.push([x.user, 1]);
    }
    return acc;
  }, []);

  return series;
};

export const moreAnswer = (
  votes: Vote[],
): { name: string; percent: number } | null => {
  if (!votes?.length) return null;

  const series = votes.reduce((acc: any, x) => {
    const last_element = acc[acc.length - 1];
    if (last_element && last_element[0] === x.voteId) {
      last_element[1]++;
    } else {
      acc.push([x.voteId, 1]);
    }
    return acc;
  }, []);

  const newSeriesArr: { voteId: number; count: number }[] = series.map(
    (item: [number, number]) => {
      return {
        voteId: item[0],
        count: item[1],
      };
    },
  );
  const sortSeriesArr = newSeriesArr.sort((a, b) =>
    a.count > b.count ? -1 : 1,
  );
  if (!sortSeriesArr.length) return null;

  const topSeria = sortSeriesArr[0];
  const topVoteId = topSeria.voteId;

  const topVoteName = guys.find(i => i.rightId === topVoteId)?.name || "Макс";
  const topPercent = Math.ceil((topSeria.count * 100) / votes.length);

  return { name: topVoteName, percent: topPercent };
};

export const moreAnswersOnQuestions = (votes: Vote[]) => {
  const question1 = moreAnswer(votes.filter(i => i.questionId === 1));
  const question2 = moreAnswer(votes.filter(i => i.questionId === 2));
  const question3 = moreAnswer(votes.filter(i => i.questionId === 3));
  const question4 = moreAnswer(votes.filter(i => i.questionId === 4));
  const question5 = moreAnswer(votes.filter(i => i.questionId === 5));
  const question6 = moreAnswer(votes.filter(i => i.questionId === 6));
  const question7 = moreAnswer(votes.filter(i => i.questionId === 7));
  const question8 = moreAnswer(votes.filter(i => i.questionId === 8));
  const question9 = moreAnswer(votes.filter(i => i.questionId === 9));
  const question10 = moreAnswer(votes.filter(i => i.questionId === 10));
  const question11 = moreAnswer(votes.filter(i => i.questionId === 11));
  const question12 = moreAnswer(votes.filter(i => i.questionId === 12));
  const question13 = moreAnswer(votes.filter(i => i.questionId === 13));
  const question14 = moreAnswer(votes.filter(i => i.questionId === 14));
  const question15 = moreAnswer(votes.filter(i => i.questionId === 15));
  const question16 = moreAnswer(votes.filter(i => i.questionId === 16));
  const question17 = moreAnswer(votes.filter(i => i.questionId === 17));
  const question18 = moreAnswer(votes.filter(i => i.questionId === 18));
  const question19 = moreAnswer(votes.filter(i => i.questionId === 19));
  const question20 = moreAnswer(votes.filter(i => i.questionId === 20));
  const question21 = moreAnswer(votes.filter(i => i.questionId === 21));
  const question22 = moreAnswer(votes.filter(i => i.questionId === 22));
  const question23 = moreAnswer(votes.filter(i => i.questionId === 23));
  const question24 = moreAnswer(votes.filter(i => i.questionId === 24));

  return [
    {
      questionId: 1,
      name: question1?.name || "",
      percent: question1?.percent || "",
    },
    {
      questionId: 2,
      name: question2?.name || "",
      percent: question2?.percent || "",
    },
    {
      questionId: 3,
      name: question3?.name || "",
      percent: question3?.percent || "",
    },
    {
      questionId: 4,
      name: question4?.name || "",
      percent: question4?.percent || "",
    },
    {
      questionId: 5,
      name: question5?.name || "",
      percent: question5?.percent || "",
    },
    {
      questionId: 6,
      name: question6?.name || "",
      percent: question6?.percent || "",
    },
    {
      questionId: 7,
      name: question7?.name || "",
      percent: question7?.percent || "",
    },
    {
      questionId: 8,
      name: question8?.name || "",
      percent: question8?.percent || "",
    },
    {
      questionId: 9,
      name: question9?.name || "",
      percent: question9?.percent || "",
    },
    {
      questionId: 10,
      name: question10?.name || "",
      percent: question10?.percent || "",
    },
    {
      questionId: 11,
      name: question11?.name || "",
      percent: question11?.percent || "",
    },
    {
      questionId: 12,
      name: question12?.name || "",
      percent: question12?.percent || "",
    },
    {
      questionId: 13,
      name: question13?.name || "",
      percent: question13?.percent || "",
    },
    {
      questionId: 14,
      name: question14?.name || "",
      percent: question14?.percent || "",
    },
    {
      questionId: 15,
      name: question15?.name || "",
      percent: question15?.percent || "",
    },
    {
      questionId: 16,
      name: question16?.name || "",
      percent: question16?.percent || "",
    },
    {
      questionId: 17,
      name: question17?.name || "",
      percent: question17?.percent || "",
    },
    {
      questionId: 18,
      name: question18?.name || "",
      percent: question18?.percent || "",
    },
    {
      questionId: 19,
      name: question19?.name || "",
      percent: question19?.percent || "",
    },
    {
      questionId: 20,
      name: question20?.name || "",
      percent: question20?.percent || "",
    },
    {
      questionId: 21,
      name: question21?.name || "",
      percent: question21?.percent || "",
    },
    {
      questionId: 22,
      name: question22?.name || "",
      percent: question22?.percent || "",
    },
    {
      questionId: 23,
      name: question23?.name || "",
      percent: question23?.percent || "",
    },
    {
      questionId: 24,
      name: question24?.name || "",
      percent: question24?.percent || "",
    },
  ];
};
