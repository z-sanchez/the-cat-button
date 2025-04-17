import { TheCatButton } from "../components/TheCatButton";
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
        animate={{ y: expanded ? "-85%" : "0%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="w-11/12 h-5/6">
          <img src={imageSource} className="rounded-md h-full object-cover" />
        </div>
      </motion.div>

      <motion.div
        className="h-screen w-full z-10"
        onTap={() => setExpanded(false)}
        animate={{ y: expanded ? "-85%" : "0%" }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="w-11/12 h-5/6">
          <span>Some Text Here</span>
        </div>
      </motion.div>
      {/* </div> */}
    </GenericPage>
  );
};
