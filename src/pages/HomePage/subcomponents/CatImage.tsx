import { Rarity } from "../../../types/Rarity";
import { RARITY_TO_COLOR_MAP } from "../../../utils/constants";

type CatImageProps = {
  imageSource: string;
  rarityTag: Rarity;
};

export const CatImage = ({ imageSource, rarityTag }: CatImageProps) => {
  const rarityColor =
    RARITY_TO_COLOR_MAP[rarityTag] ?? RARITY_TO_COLOR_MAP.default;

  return (
    <div className="relative h-4/6">
      <img
        src={imageSource}
        className="rounded-md h-full object-cover"
        alt="cat image source"
        onError={(e) => {
          e.currentTarget.src = "/the-cat-button-logo.png";
        }}
      />
      <p
        className={`absolute bottom-2 right-2 rounded-md px-3 py-1 font-medium ${rarityColor} text-white`}
      >
        {rarityTag ? rarityTag : "???"}
      </p>
    </div>
  );
};
