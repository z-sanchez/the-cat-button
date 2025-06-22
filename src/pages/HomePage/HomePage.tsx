import { GenericPage } from "../../layout/GenericPage";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { UseCatStore } from "../../state/useCatsStore";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { Link } from "react-router";
import { useSwipeable } from "react-swipeable";
import { getCat } from "../../mockData/temp";
import axios from "axios";
import { Cat } from "../../types/Cat";
import { DEFAULT_DISPLAY_CAT } from "../../utils/constants";
import mockedCatResponse from "../../mockData/cats.json";
import { ProfileImage } from "./subcomponents/ProfileImage";
import { NameTag } from "./subcomponents/NameTag";
import { Spinner } from "../../components/Spinner";
import { ButtonContainer } from "./subcomponents/ButtonContainer";
import { Bio } from "./subcomponents/Bio";
import { Rarity } from "../../types/Rarity";

export const Homepage = () => {
  const { addCat, cats, removeCat } = UseCatStore((state) => state);
  const [expanded, setExpanded] = useState(false);
  const [cat, setCat] = useState<Cat>(DEFAULT_DISPLAY_CAT);
  const [loading, setLoading] = useState(false);

  const { imageSource, name, age, occupation, hobby, origin, backstory } = cat;
  const isCatInStorage = cats.some(({ id }) => id === cat.id);

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

  const loadCats = () => {
    setLoading(true);

    if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
      console.log("Fetching mock data cat");
      setCat({ ...mockedCatResponse.cats[0] });
      setLoading(false);
      return;
    }

    axios
      .get(import.meta.env.VITE_CAT_BUTTON_API)
      .then((response) => {
        setCat({ ...response.data, id: response.data._id });
        setLoading(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    if (cat.id === 0) {
      loadCats();
    }
  }, [cat.id]);

  const animateY = "-55%";
  const type = "spring";
  const bounce = 0;

  return (
    <GenericPage hideOverflow={true}>
      <ButtonContainer
        onClick={() => {
          setCat(getCat());
        }}
      />
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
          <Spinner />
        ) : (
          <div
            className={`w-11/12 h-full relative transition-all ease-in-out`}
            {...handleUp}
            onClick={() => setExpanded((prev) => !prev)}
          >
            <ProfileImage imageSource={imageSource} rarityTag={Rarity.common} />
            <NameTag name={name} />
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
          <Bio
            toggleFavorite={() => {
              if (isCatInStorage) {
                removeCat(cat.id);
                return;
              }
              addCat(cat);
            }}
            age={age}
            occupation={occupation}
            hobby={hobby}
            backstory={backstory}
            isCatInStorage={isCatInStorage}
            origin={origin}
          />
        </div>
      </motion.div>
    </GenericPage>
  );
};
