// import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";
import { LuCrown } from "react-icons/lu";
import { CiClock1, CiHeart } from "react-icons/ci";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import mockedCats from "../mockData/cats.json";
import { motion } from "motion/react";
import { useState } from "react";

export const NewHomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const { imageSource, name, age, occupation, hobby, origin, backstory } =
    mockedCats.cats[0];

  return (
    <GenericPage>
      <motion.div
        className="h-full w-full flex items-center flex-col z-20"
        onTap={() => setExpanded(true)}
        animate={{ y: expanded ? "-50%" : "0%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="w-11/12 h-5/6 relative">
          <img src={imageSource} className="rounded-md h-full object-cover" />
          <p className="absolute bottom-2 right-2 rounded-md px-3 py-1 font-medium bg-yellow-400  text-white">
            Common
          </p>
        </div>
      </motion.div>

      <motion.div
        className="h-screen w-full z-10"
        onTap={() => setExpanded(false)}
        animate={{ y: expanded ? "-50%" : "0%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="w-11/12 h-5/6">
          <div className="px-2 mx-2  bg-gray-50 rounded-md text-sm">
            <div className="flex items-center">
              <LuCrown stroke="#a28adf" className="h-5 w-5" />
              <p className="text-xl font-semibold text-primary px-2">{name}</p>
            </div>

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

            <div className="mt-2 bg-white rounded-md px-4 ">
              <p className="text-lg font-semibold text-black">Backstory</p>
              <p className="text-gray-700 text-sm">{backstory}</p>
            </div>
          </div>
          <div className="my-4 px-5 flex justify-between w-full text-sm">
            <div className=" flex items-center ">
              <CiHeart fill="#ef4444" className="h-5 w-5" />
              <p className="px-2 text-sm">Save to Favorites</p>
            </div>
          </div>
        </div>
      </motion.div>
    </GenericPage>
  );
};
