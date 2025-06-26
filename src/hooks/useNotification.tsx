import { UseNotificationStore } from "../state/useNotificationStore";

export const useNotification = () => {
  const { error, setError } = UseNotificationStore((state) => state);

  return {
    setError,
    error,
  };
};
