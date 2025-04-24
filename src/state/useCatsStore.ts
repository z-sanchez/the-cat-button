import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Cat } from "../types/Cat";
import { CAT_STORAGE_KEY } from "../utils/constants";

interface UseCatStoreInterface {
  cats: Cat[];
  addCat: (cat: Cat) => void;
  removeCat: (catId: number) => void;
}

export const UseCatStore = create<UseCatStoreInterface>()(
  persist(
    (set) => ({
      cats: [],
      addCat: (cat) =>
        set((state) => ({
          ...state,
          cats: [...state.cats, cat],
        })),
      removeCat: (catId) =>
        set((state) => ({
          ...state,
          cats: state.cats.filter(({ id }) => id != catId),
        })),
    }),
    { name: CAT_STORAGE_KEY }
  )
);
