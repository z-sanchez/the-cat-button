import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";

export const HomePage = () => {
  return (
    <GenericPage>
      <div className="w-full flex justify-between items-center flex-col mt-2">
        <div className="flex w-full items-center rounded-md shadow-lg flex-col">
          <div className="w-full h-[250px]">
            <img
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-scale-down object-center rounded-md"
            />
          </div>
          <div className="px-2 py-2 mx-2 mt-4 bg-gray-50 rounded-md">
            <p className="text-2xl font-semibold text-primary">
              Duke Meowington
            </p>
            <p>Age: 9 Years</p>
            <p>Occupation: Senior Nap Consultant</p>
            <p>Hobby: Box Sitting</p>
            <p>Origin: Tokyo Fish Market</p>
            <div className="mt-2 bg-white rounded-md px-4 py-2">
              <p className="text-lg font-semibold text-black">Backstory</p>
              <p className="text-gray-700">
                Duke Meowington is a aristocratic 9-year-old feline who
                discovered their true calling as a senior nap consultant after a
                chance encounter in the Tokyo Fish Market. When not pursuing
                their professional duties, they can be found enjoying box
                sitting or savoring their favorite dish: free-range mouse
                morsels.
              </p>
            </div>
          </div>
          <div className="my-5">
            <button className="outline-1 outline-primary outline px-4 text-primary rounded-md hover:bg-primary hover:text-white transition-all">
              Save To Favorites
            </button>
          </div>
        </div>
        <div className="w-3/4 mt-10">
          <TheCatButton />
        </div>
      </div>
    </GenericPage>
  );
};
