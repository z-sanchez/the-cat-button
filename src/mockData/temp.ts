import { Cat } from "../types/Cat";
import mockedAppData from "./cats.json";

export const getCat = (): Cat => {
  const catsLength = mockedAppData.cats.length;
  const randomIndex = Math.floor(Math.random() * catsLength);

  return mockedAppData.cats[randomIndex] as Cat;
};
