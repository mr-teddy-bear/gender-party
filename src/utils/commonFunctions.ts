import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { deviceSizes } from "../constants";
import { photo1, photo2, photo3, photo4 } from "../assets/images/photos";

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
    name: "Соколовская Елена",
    photo: photo1,
  },
  {
    id: 2,
    name: "Соколовская Анастасия",
    photo: photo2,
  },
  {
    id: 3,
    name: "Шедова Светлана",
    photo: photo3,
  },
  {
    id: 4,
    name: "Ракомская Татьяна",
    photo: photo4,
  },
];

export const guys = [
  { name: "Соколовская Елена(Мама Макса)" },
  { name: "Соколовская-Шедова Настя" },
  { name: "Шедова Светлана(Мама Насти)" },
  { name: "Ракомская Татьяна(Тетя Макса)" },
];
