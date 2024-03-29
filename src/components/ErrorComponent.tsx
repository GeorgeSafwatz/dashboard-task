import { FC } from "react";

const ErrorComponent: FC<{ header: string; body: string }> = ({
  header,
  body,
}) => {
  return (
    <div className="absolute top-1/4 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <p className="text-red-500 text-xl md:text-2xl font-bold">{header}</p>
      <p className="text-red-500 text-lg md:text-xl">{body}</p>
    </div>
  );
};

export default ErrorComponent;
