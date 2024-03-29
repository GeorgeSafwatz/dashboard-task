import { useAppContext } from "../hooks/EditorContext";

const NavBar = () => {
  const { isEditor, setEditorMode } = useAppContext();
  const clickHandler = (newEditorMode: boolean) => {
    setEditorMode(newEditorMode);
  };
  return (
    <nav className="w-full h-fit md:p-4 p-2 bg-black/20 flex flex-row justify-between">
      <p className="text-xl font-semibold text-center md:text-3xl md:text-left text-indigo-400 font-mono">
        Your dashboard
      </p>
      <section>
        <button
          className="px-4 py-2 bg-indigo-400 text-white disabled:bg-slate-300 disabled:text-slate-600"
          onClick={() => clickHandler(true)}
          disabled={isEditor}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-indigo-400 text-white disabled:bg-slate-300 disabled:text-slate-600"
          onClick={() => clickHandler(false)}
          disabled={!isEditor}
        >
          View
        </button>
      </section>
    </nav>
  );
};

export default NavBar;
