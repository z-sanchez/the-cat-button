import { CiClock1 } from "react-icons/ci";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

type BioProps = {
  age: number;
  occupation: string;
  hobby: string;
  backstory: string;
  origin: string;
  toggleFavorite: () => void;
  isCatInStorage: boolean;
};

export const Bio = ({
  age,
  occupation,
  hobby,
  backstory,
  isCatInStorage,
  toggleFavorite,
  origin,
}: BioProps) => {
  return (
    <>
      <div className="flex items-center pb-1">
        <CiClock1 fill="#eab308" className="h-5 w-5" />
        <p className="px-2">
          Age: {age} {age == 1 ? "Year" : "Years"}
        </p>
      </div>

      <div className="flex items-center pb-1">
        <LiaSuitcaseSolid fill="#f97316" className="h-5 w-5" />
        <p className="px-2">Occupation: {occupation}</p>
      </div>

      <div className="flex items-center pb-1">
        <IoBookOutline stroke="#3b82f6" className="h-5 w-5" />
        <p className="px-2">Hobby: {hobby}</p>
      </div>

      <div className="flex items-center pb-1">
        <FiMapPin stroke="#ef4444" className="h-5 w-5" />
        <p className="px-2">Origin: {origin}</p>
      </div>

      <div className="my-4 bg-white rounded-md px-4 ">
        <p className="text-lg font-semibold text-black">Backstory</p>
        <p className="text-gray-700 text-sm">{backstory}</p>
      </div>

      <div
        className="flex items-center justify-start my-10"
        onClick={toggleFavorite}
      >
        <FaHeart
          fill={isCatInStorage ? "#ef4444" : "white"}
          className={
            "h-4 w-6 stroke-[50] stroke-red-500 transition-all ease-in-out duration-500"
          }
        />
        <p className="px-2 font-semibold">
          Save{isCatInStorage ? "d" : ""} to Favorites
        </p>
      </div>
    </>
  );
};
