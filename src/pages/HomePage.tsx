import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";
import { LuCrown } from "react-icons/lu";
import { CiClock1 } from "react-icons/ci";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import mockedCats from "../mockData/cats.json";
import { motion } from "motion/react";
import { useState } from "react";
import { Cat } from "../types/Cat";
import { UseCatStore } from "../state/useCatsStore";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { Link } from "react-router";

export const Homepage = () => {
  const { addCat, cats, removeCat } = UseCatStore((state) => state);
  const [expanded, setExpanded] = useState(false);
  const cat = mockedCats.cats[0] as Cat;
  const { imageSource, name, age, occupation, hobby, origin, backstory } = cat;
  const isCatInStorage = cats.some(({ id }) => id === cat.id);

  const animateY = "-55%";
  const type = "spring";
  const bounce = 0;

  return (
    <GenericPage hideOverflow={true}>
      <div className="w-full relative z-50 top-[90%]">
        <div className="w-full absolute top-full">
          <TheCatButton />
        </div>
      </div>
      <motion.div
        className="h-screen w-full flex items-center flex-col z-10"
        animate={{ y: expanded ? animateY : "0%" }}
        transition={{ type, bounce }}
      >
        <div className="mb-4 flex justify-end w-full">
          <Link to="/collection" className="ml-auto mx-2">
            <MdOutlineCollectionsBookmark className="w-6 h-6" fill="black" />
          </Link>
        </div>
        <div
          className={`w-11/12 h-full relative transition-all ease-in-out`}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className="relative h-4/6">
            <img src={imageSource} className="rounded-md h-full object-cover" />
            <p className="absolute bottom-2 right-2 rounded-md px-3 py-1 font-medium bg-yellow-400  text-white">
              Common
            </p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <p className="text-xl font-semibold text-primary px-2">{name}</p>
            <LuCrown stroke="#a28adf" className="h-5 w-5" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className={`h-screen w-full z-10 opacity-0 transition-opacity duration-500 ease-in-out ${
          expanded ? "opacity-100" : ""
        }`}
        onPanEnd={(_, info) => {
          if (info.offset.y < 100) setExpanded(true); // swipe up
        }}
        animate={{ y: expanded ? "-70%" : "0%" }}
        transition={{ type, bounce }}
      >
        <div className="w-full flex justify-center flex-col px-2">
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
        </div>
        <div className="my-4 px-2 flex justify-between w-full text-sm">
          <div
            className="flex items-center justify-center"
            onClick={() => {
              if (isCatInStorage) {
                removeCat(cat.id);
                return;
              }
              addCat(cat);
            }}
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
        </div>
      </motion.div>
    </GenericPage>
  );
};
