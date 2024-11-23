import { useRef, useState } from "react";
import { Meows } from "./Meows";

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
      <Meows
        show={showText.nextText === 0 && showText.show}
        positionStyling="-right-16 rotate-12 sm:-right-20"
        meowText="Meow!"
      />
      <Meows
        show={showText.nextText === 1 && showText.show}
        positionStyling="-left-16 -rotate-12 sm:-left-20 sm:-rotate-12"
        meowText="Meow!"
      />
      <Meows
        show={showText.nextText === 2 && showText.show}
        positionStyling="right-56 bottom-10 sm:right-60 sm:bottom-12 -rotate-6"
        meowText="Prrrrrrr!!!"
      />
      <Meows
        show={showText.nextText === 3 && showText.show}
        positionStyling="left-24 bottom-10 sm:bottom-12 rotate-6"
        meowText="Hissssss!!!"
      />
      <button
        onClick={onClick}
        className="w-full text-primary font-display font-semibold text-2xl sm:text-3xl sm:py-1 border-4 rounded-md border-primary cursor-pointer active:bg-primary active:text-white transition-all"
      >
        The Cat Button
      </button>
    </div>
  );
};
