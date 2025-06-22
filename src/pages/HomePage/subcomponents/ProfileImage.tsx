import { Rarity } from "../../../types/Rarity";
import { RARITY_TO_COLOR_MAP } from "../../../utils/constants";

type ProfileImageProps = {
  imageSource: string;
  rarityTag: Rarity;
};

export const ProfileImage = ({ imageSource, rarityTag }: ProfileImageProps) => {
  const rarityColor =
    RARITY_TO_COLOR_MAP[rarityTag] ?? RARITY_TO_COLOR_MAP.default;

  return (
    <div className="relative h-4/6">
      <img src={imageSource} className="rounded-md h-full object-cover" />
      <p
        className={`absolute bottom-2 right-2 rounded-md px-3 py-1 font-medium ${rarityColor} text-white`}
      >
        {rarityTag}
      </p>
    </div>
  );
};
