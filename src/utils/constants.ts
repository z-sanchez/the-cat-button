import { Rarity } from "../types/Rarity";

export const CAT_STORAGE_KEY = "cat-storage";

export const DEFAULT_DISPLAY_CAT = {
  imageSource: "",
  name: "",
  age: 0,
  occupation: "",
  hobby: "",
  origin: "",
  backstory: "",
  id: 0,
};

export const RARITY_TO_COLOR_MAP = {
  [Rarity.common]: "bg-yellow-400",
  default: "bg-yellow-400",
};
