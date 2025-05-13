import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";
import { LuCrown } from "react-icons/lu";
import { CiClock1 } from "react-icons/ci";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { UseCatStore } from "../state/useCatsStore";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { Link } from "react-router";
import { useSwipeable } from "react-swipeable";
import { getCat } from "../mockData/temp";
import axios from "axios";
import { Cat } from "../types/Cat";
import { DEFAULT_DISPLAY_CAT } from "../utils/constants";

export const Homepage = () => {
  const { addCat, cats, removeCat } = UseCatStore((state) => state);
  const [expanded, setExpanded] = useState(false);
  const hasFetched = useRef(false);
  const [cat, setCat] = useState<Cat>(DEFAULT_DISPLAY_CAT);
  const [loading, setLoading] = useState(false);

  const { imageSource, name, age, occupation, hobby, origin, backstory } = cat;
  const isCatInStorage = cats.some(({ id }) => id === cat.id);

  console.log({ cat });

  const handleUp = useSwipeable({
    onSwipedUp: () => {
      setExpanded(true);
    },
  });

  const handleDown = useSwipeable({
    onSwipedDown: () => {
      setExpanded(false);
    },
  });

  useEffect(() => {
    if (cat.id === 0 && !hasFetched.current) {
      hasFetched.current = true;
      setLoading(true);
      axios
        .get(import.meta.env.VITE_CAT_BUTTON_API)
        .then((response) => {
          setCat({ ...response.data, id: response.data._id });
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [cat]);

  const animateY = "-55%";
  const type = "spring";
  const bounce = 0;

  return (
    <GenericPage hideOverflow={true}>
      <div className="w-full relative z-50 top-[90%]">
        <div
          className="w-full absolute top-full"
          onClick={() => {
            setCat(getCat());
          }}
        >
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
        {loading ? (
          <div className="h-2/5 justify-end items-end flex">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-10 h-10 animate-spin dark:text-gray-200 fill-purple-700"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div
            className={`w-11/12 h-full relative transition-all ease-in-out`}
            {...handleUp}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <div className="relative h-4/6">
              <img
                src={imageSource}
                className="rounded-md h-full object-cover"
              />
              <p className="absolute bottom-2 right-2 rounded-md px-3 py-1 font-medium bg-yellow-400  text-white">
                Common
              </p>
            </div>
            <div className="flex items-center flex-col mt-10">
              <p className="text-xl font-semibold text-primary px-2">{name}</p>
              <LuCrown stroke="#a28adf" className="h-5 w-5" />
            </div>
          </div>
        )}
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
        <div
          className="w-full flex justify-center flex-col px-2"
          {...handleDown}
        >
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
