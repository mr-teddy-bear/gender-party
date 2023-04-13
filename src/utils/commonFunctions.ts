import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { deviceSizes } from "../constants";
import { photo1, photo2, photo3, photo4 } from "../assets/images/photos";
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
    photo: photo1,
  },
  {
    id: 6,
    name: "Ломаченко Даша",
    photo: photo2,
  },
  {
    id: 7,
    name: "Ракомская Аня",
    photo: photo3,
  },
  {
    id: 8,
    name: "Кузьмицкая Снежана",
    photo: photo4,
  },
  {
    id: 9,
    name: "Игнатенко Стас",
    photo: photo1,
  },
  {
    id: 10,
    name: "Шедова Светлана",
    photo: photo2,
  },
  {
    id: 11,
    name: "Тесленок Анастасия",
    photo: photo3,
  },
  {
    id: 12,
    name: "Ракомская Татьяна",
    photo: photo4,
  },
  {
    id: 13,
    name: "Мотуз Дмитрий",
    photo: photo1,
  },
  {
    id: 14,
    name: "Шедов Слава",
    photo: photo2,
  },
  {
    id: 15,
    name: "Соколовская-Шедова Настя",
    photo: photo3,
  },
  {
    id: 16,
    name: "Ракомский Сергей",
    photo: photo4,
  },
  {
    id: 17,
    name: "Тесленок Иван",
    photo: photo1,
  },
  {
    id: 18,
    name: "Ляховец Оля",
    photo: photo2,
  },
  {
    id: 19,
    name: "Соколовская Елена",
    photo: photo3,
  },
  {
    id: 20,
    name: "Кузьмицкая Татьяна",
    photo: photo4,
  },
  {
    id: 21,
    name: "Соколовский Максим",
    photo: photo4,
  },
  {
    id: 22,
    name: "Ракомский Саша",
    photo: photo4,
  },
  {
    id: 23,
    name: "Ракомская Валя",
    photo: photo4,
  },
  {
    id: 24,
    name: "Максимов Влад",
    photo: photo4,
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

  console.log("series", series);

  return series;
};
