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
          }, 30000);
        }
      },
      onNeedRefresh() {
        window.location.reload();
      },
    });
  }, []);
};
