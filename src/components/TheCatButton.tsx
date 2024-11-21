import { useRef, useState } from "react";

export const TheCatButton = () => {
  const [showText, setShowText] = useState({ show: false, nextText: 0 });
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const onClick = () => {
    // Clear any existing timer to prevent overlap
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (showText.nextText === 4) {
      setShowText({ show: true, nextText: 0 });
    }
    setShowText((state) => ({
      ...state,
      show: true,
    }));

    timerRef.current = setTimeout(() => {
      setShowText((state) => ({
        nextText: state.nextText + 1,
        show: false,
      }));

      timerRef.current = null; // Clean up timer reference
    }, 500);
  };

  return (
    <div className="relative w-full">
      <p
        className={`font-display text-2xl font-semibold absolute -right-20 rotate-12 transition-all ${
          showText.nextText === 0 && showText.show ? "opacity-100" : "opacity-0"
        }`}
      >
        Meow!
      </p>
      <p
        className={`font-display text-2xl font-semibold absolute -left-20 -rotate-12 transition-all ${
          showText.nextText === 1 && showText.show ? "opacity-100" : "opacity-0"
        }`}
      >
        Meow!
      </p>
      <p
        className={`font-display text-2xl font-semibold absolute right-60 bottom-14 -rotate-6 transition-all ${
          showText.nextText === 2 && showText.show ? "opacity-100" : "opacity-0"
        }`}
      >
        Prrrrrrr!!!
      </p>
      <p
        className={`font-display text-2xl font-semibold absolute left-24 bottom-14 rotate-6 transition-all ${
          showText.nextText === 3 && showText.show ? "opacity-100" : "opacity-0"
        }`}
      >
        Hissssss!!!
      </p>
      <button
        onClick={onClick}
        className="w-full py-1 text-primary font-display font-semibold text-3xl border-4 rounded-md border-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
      >
        The Cat Button
      </button>
    </div>
  );
};
