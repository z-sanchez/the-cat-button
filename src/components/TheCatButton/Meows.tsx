type MeowsProps = {
  show: boolean;
  meowText: string;
  positionStyling: string;
};

export const Meows = ({ show, meowText, positionStyling }: MeowsProps) => {
  return (
    <p
      className={`font-display text-lg sm:text-2xl font-semibold absolute ${positionStyling} transition-opacity duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {meowText}
    </p>
  );
};
