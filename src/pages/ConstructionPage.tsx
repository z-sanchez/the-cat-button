import { TheCatButton } from "../components/TheCatButton";
import { GenericPage } from "../layout/GenericPage";
import CatHero from "../assets/hero.svg?react";

export const ConstructionPage = () => {
  return (
    <GenericPage>
      <div className="flex w-full h-full items-center flex-col">
        <div className="flex w-7/12 justify-center max-w-3xl">
          <TheCatButton />
        </div>
        <CatHero className="w-full md:w-3/4 lg:w-8/12 xl:w-5/12 2xl:w-5/12" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-red-500 font-display font-semibold">
          Under Construction 🚧
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl w-8/12 text-center">
          Hard at work building something purr-fect!
        </p>
      </div>
    </GenericPage>
  );
};
