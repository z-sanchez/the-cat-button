import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NOTIFICATION_KEY } from "../utils/constants";

interface UseNotificationInterface {
  error: { show: boolean; message: string };
  setError: ({ show, message }: { show: boolean; message: string }) => void;
}

export const UseNotificationStore = create<UseNotificationInterface>()(
  persist(
    (set) => ({
      error: { show: false, message: "" },
      setError({ show, message }) {
        set((state) => {
          return {
            ...state,
            error: { show, message },
          };
        });
      },
    }),
    { name: NOTIFICATION_KEY }
  )
);
