import { ReactNode } from "react";

export const GenericPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen py-20 flex justify-center items-center">
      {children}
    </div>
  );
};
