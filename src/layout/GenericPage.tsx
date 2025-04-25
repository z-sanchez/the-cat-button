import { ReactNode } from "react";

export const GenericPage = ({
  children,
  hideOverflow,
}: {
  children: ReactNode;
  hideOverflow?: boolean;
}) => {
  return (
    <div
      className={`w-screen h-screen py-5 sm:py-20 px-2 ${
        hideOverflow ? "overflow-y-hidden" : ""
      }`}
    >
      {children}
    </div>
  );
};
