import { FC } from "react";
import { useAppContext } from "../../hooks/EditorContext";

const ChartsOverlay: FC<{ cppName: string }> = ({ cppName }) => {
  const { isEditor, editableCPP, manageEditableCPP } = useAppContext();
  const clickHandler = () => {
    if (editableCPP.length > 1) {
      manageEditableCPP("remove", cppName);
    } else {
      manageEditableCPP("add", cppName);
    }
  };
  return (
    <>
      {isEditor && (
        <>
          <div
            onClick={clickHandler}
            className=" bg-opacity-0 hover:bg-opacity-30 absolute bg-indigo-900 w-full h-full z-10 top-0 bottom-0 left-0 right-0 transition-all duration-300 ease-in-out cursor-pointer"
          ></div>
          <div className="absolute top-3 left-3 rounded-md z-20 border-2 border-indigo-400 p-4">
            {editableCPP.includes(cppName) && "✅"}
          </div>
        </>
      )}
    </>
  );
};

export default ChartsOverlay;
