import { GenericPage } from "../layout/GenericPage";
import { UseCatStore } from "../state/useCatsStore";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

export const CollectionPage = () => {
  const { cats } = UseCatStore((state) => state);

  return (
    <GenericPage>
      <div className="mb-4 flex justify-start w-full">
        <Link to="/" className="mx-2">
          <IoMdArrowRoundBack className="w-6 h-6" fill="black" />
        </Link>
      </div>
      <div className="w-11/12 mx-auto flex flex-row flex-wrap gap-5">
        {cats.map((cat) => {
          return (
            <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
              <img
                src={cat.imageSource}
                className="rounded-md h-full object-cover"
              />
            </div>
          );
        })}

        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="h-56 mb-4 flex-[0_1_calc(50%-10px)]">
          <img
            src={cats[0].imageSource}
            className="rounded-md h-full object-cover"
          />
        </div>
      </div>
    </GenericPage>
  );
};
