import { LuCrown } from "react-icons/lu";

type NameTagProps = {
  name: string;
  icon?: string;
};

export const NameTag = ({ name, icon }: NameTagProps) => {
  return (
    <div className="flex items-center flex-col mt-10">
      <p
        className="text-xl font-semibold text-primary px-2"
        data-testid="cat-name"
      >
        {name ? name : "Unknown Kitty"}
      </p>
      {icon ? (
        icon
      ) : (
        <LuCrown stroke="#a28adf" className="h-5 w-5" data-testid="fa-crown" />
      )}
    </div>
  );
};
