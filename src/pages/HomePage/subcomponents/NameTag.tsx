import { LuCrown } from "react-icons/lu";

type NameTagProps = {
  name: string;
};

export const NameTag = ({ name }: NameTagProps) => {
  return (
    <div className="flex items-center flex-col mt-10">
      <p className="text-xl font-semibold text-primary px-2">{name}</p>
      <LuCrown stroke="#a28adf" className="h-5 w-5" />
    </div>
  );
};
