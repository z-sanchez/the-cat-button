import { Cat } from "../types/Cat";
import mockedAppData from "../mockData/cats.json";

export const getCat = (): Cat => {
  const catsLength = mockedAppData.cats.length;
  const randomIndex = Math.floor(Math.random() * (catsLength - 1));

  return mockedAppData.cats[randomIndex] as Cat;
};
