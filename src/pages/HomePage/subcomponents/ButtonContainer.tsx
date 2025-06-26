import { TheCatButton } from "../../../components/TheCatButton";

type ButtonContainerProps = {
  onClick: () => void;
};

export const ButtonContainer = ({ onClick }: ButtonContainerProps) => {
  return (
    <div className="w-full relative z-50 top-[90%]">
      <div
        className="w-full absolute top-full button-wrapper"
        onClick={onClick}
      >
        <TheCatButton />
      </div>
    </div>
  );
};
