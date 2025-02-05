import { useEffect } from "react";
import { registerSW } from "virtual:pwa-register";

export const usePwaServiceWorker = () => {
  useEffect(() => {
    registerSW({
      onRegistered(registration) {
        console.log("Service worker registered", registration);

        if (registration) {
          setInterval(() => {
            registration.update();
          }, import.meta.env.VITE_UPDATE_SERVICE_WORKER_POLL * 60 * 1000);
        }
      },
      onNeedRefresh() {
        window.location.reload();
      },
    });
  }, []);
};
