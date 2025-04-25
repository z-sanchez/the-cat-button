import { ReactNode } from "react";

export const GenericPage = ({
  children,
  hideOverflow,
  scrollable,
  ...otherProps
}: {
  children: ReactNode;
  hideOverflow?: boolean;
  scrollable?: boolean;
}) => {
  return (
    <div
      {...otherProps}
      className={`w-screen h-screen py-5 sm:py-20 px-2 ${
        hideOverflow ? "overflow-hidden" : ""
      } ${scrollable ? "scrollable" : ""}`}
    >
      {children}
    </div>
  );
};
