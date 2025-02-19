import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";
import { LuCrown } from "react-icons/lu";
import { CiClock1, CiHeart } from "react-icons/ci";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

export const HomePage = () => {
  return (
    <GenericPage>
      <div className="w-full h-full flex justify-end items-center flex-col">
        <div className="flex w-full items-center rounded-md shadow-lg flex-col my-auto">
          <div className="w-[400px] h-[200px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-contain object-center rounded-md"
            />
          </div>
          <div className="px-2 mx-2 mt-4 py-2 bg-gray-50 rounded-md text-sm">
            <div className="flex items-center">
              <LuCrown stroke="#a28adf" className="h-5 w-5" />
              <p className="text-xl font-semibold text-primary px-2">
                Sir Whiskerbottom the Third
              </p>
            </div>

            <div className="flex items-center pb-1">
              <CiClock1 fill="#eab308" className="h-5 w-5" />
              <p className="px-2">Age: 9 Years</p>
            </div>

            <div className="flex items-center pb-1">
              <LiaSuitcaseSolid fill="#f97316" className="h-5 w-5" />
              <p className="px-2">Occupation: Senior Nap Consultant </p>
            </div>

            <div className="flex items-center pb-1">
              <IoBookOutline stroke="#3b82f6" className="h-5 w-5" />
              <p className="px-2">Hobby: Collecting shiny trinkets</p>
            </div>

            <div className="flex items-center pb-1">
              <FiMapPin stroke="#ef4444" className="h-5 w-5" />
              <p className="px-2">Origin: Meowsterdam</p>
            </div>

            <div className="mt-2 bg-white rounded-md px-4 ">
              <p className="text-lg font-semibold text-black">Backstory</p>
              <p className="text-gray-700 text-sm">
                Sir Whiskerbottom III was once the esteemed feline of an
                eccentric scholar who lived in a towering library. Over the
                years, he developed a taste for fine literature (mostly sleeping
                on open books) and a talent for finding the coziest sunspots.
              </p>
            </div>
          </div>
          <div className="my-4 px-5 flex justify-between w-full text-sm">
            <div className=" flex items-center ">
              <CiHeart fill="#ef4444" className="h-5 w-5" />
              <p className="px-2 text-sm">Save to Favorites</p>
            </div>
            <div className="rounded-md px-3 py-1 bg-yellow-400  text-white flex items-center ">
              <p>Common</p>
            </div>
          </div>
        </div>
        <div className="w-3/4 ">
          <TheCatButton />
        </div>
      </div>
    </GenericPage>
  );
};
