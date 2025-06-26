import { ReactNode } from "react";
import { ErrorNotification } from "../components/ErrorNotification";
import { useNotification } from "../hooks/useNotification";

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
  const { error, setError } = useNotification();
  return (
    <>
      <ErrorNotification
        show={error.show}
        message={error.message}
        onClick={() => setError({ show: false, message: "" })}
      />
      <div
        {...otherProps}
        className={`w-screen h-screen py-5 sm:py-20 px-2 relative ${
          hideOverflow ? "overflow-hidden" : ""
        } ${scrollable ? "scrollable" : ""}`}
      >
        {children}
      </div>
    </>
  );
};
