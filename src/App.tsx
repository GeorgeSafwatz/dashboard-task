import "./App.css";
import ChartsContainer from "./components/ChartsContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AppProvider } from "./hooks/EditorContext";

export default function App() {
  return (
    <AppProvider>
      <>
        <NavBar />
        <main className=" mb-2 md:mb-4">
          <ChartsContainer />
        </main>
        <Footer />
      </>
    </AppProvider>
  );
}
