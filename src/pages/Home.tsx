import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";

export const HomePage = () => {
  return (
    <GenericPage>
      <div className="w-full h-full flex justify-end items-center flex-col">
        <div className="flex w-full items-center rounded-md shadow-lg flex-col my-auto">
          <div className="w-[400px] h-[250px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-contain object-center rounded-md"
            />
          </div>
          <div className="px-2 py-2 mx-2 mt-4 bg-gray-50 rounded-md">
            <p className="text-2xl font-semibold text-primary">
              Sir Whiskerbottom the Third 🐱🎩
            </p>
            <p>Age: 9 Years</p>
            <p>Occupation: Senior Nap Consultant 😴</p>
            <p>Hobby: Collecting shiny trinkets ✨</p>
            <p>Origin: Meowsterdam</p>
            <div className="mt-2 bg-white rounded-md px-4 py-2">
              <p className="text-lg font-semibold text-black">Backstory</p>
              <p className="text-gray-700">
                Sir Whiskerbottom III was once the esteemed feline of an
                eccentric scholar who lived in a towering library. Over the
                years, he developed a taste for fine literature (mostly sleeping
                on open books) and a talent for finding the coziest sunspots.
              </p>
            </div>
          </div>
          <div className="my-5">
            <button className="outline-1 outline-primary outline px-4 text-primary rounded-md hover:bg-primary hover:text-white transition-all">
              Save To Favorites
            </button>
          </div>
        </div>
        <div className="w-3/4 ">
          <TheCatButton />
        </div>
      </div>
    </GenericPage>
  );
};
