import { createContext, FC, useContext, useState } from "react";

interface AppContextType {
  isEditor: boolean;
  setEditorMode: (newState: boolean) => void;
  editableCPP: string[];
  manageEditableCPP: (action: "add" | "remove", cppName: string) => void;
}

const initialState: AppContextType = {
  isEditor: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setEditorMode: (newState: boolean) => {},
  editableCPP: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  manageEditableCPP: (action: "add" | "remove", cppName: string) => {},
};

const AppContext = createContext<AppContextType>(initialState);

export const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [isEditor, setIsEditor] = useState(initialState.isEditor);
  const [editableCPP, setEditableCPP] = useState(["lineChart", "barChart"]);

  const setEditorMode = (newState: boolean) => {
    setIsEditor(newState);
  };
  const manageEditableCPP = (action: "add" | "remove", cppName: string) => {
    if (action === "add") {
      setEditableCPP([...editableCPP, cppName]);
    } else {
      setEditableCPP(editableCPP.filter((cpp) => cpp !== cppName));
    }
  };

  const value = { isEditor, setEditorMode, editableCPP, manageEditableCPP };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
