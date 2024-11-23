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
        positionStyling="-right-20 rotate-12"
        meowText="Meow!"
      />
      <Meows
        show={showText.nextText === 1 && showText.show}
        positionStyling="-left-20 -rotate-12"
        meowText="Meow!"
      />
      <Meows
        show={showText.nextText === 2 && showText.show}
        positionStyling="right-60 bottom-14 -rotate-6"
        meowText="Prrrrrrr!!!"
      />
      <Meows
        show={showText.nextText === 3 && showText.show}
        positionStyling="left-24 bottom-14 rotate-6"
        meowText="Hissssss!!!"
      />
      <button
        onClick={onClick}
        className="w-full py-1 text-primary font-display font-semibold text-3xl border-4 rounded-md border-primary cursor-pointer hover:bg-primary hover:text-white transition-all"
      >
        The Cat Button
      </button>
    </div>
  );
};
