export const ErrorNotification = ({
  show,
  message,
  onClick,
}: {
  show: boolean;
  message: string;
  onClick: () => void;
}) => {
  return show ? (
    <div
      className="z-40 w-full absolute text-center py-1 top-0 bg-red-500 text-white rounded-bottom-md flex justify-center transition-all"
      onClick={onClick}
    >
      <p> {message}</p>
    </div>
  ) : null;
};
