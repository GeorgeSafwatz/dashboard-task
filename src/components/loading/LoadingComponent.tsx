import { FC } from "react";
import LoadingSpinner from "./LoadingSpinner";

const LoadingComponent: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className="h-[400px] w-[600px]">
      {isLoading ? <LoadingSpinner /> : <div>Data loaded successfully!</div>}
    </div>
  );
};

export default LoadingComponent;
