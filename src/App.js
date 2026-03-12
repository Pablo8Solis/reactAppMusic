import { useState } from "react";
import AsideLeft from "./components/ASIDE-L";
import Header from "./components/HEADER";
import Library from "./components/LIBRARY-SONGS";


function App() {
  const [view, setView] = useState("home");
  const [librarySongs, setLibrarySongs] = useState([]);

  const addToLibrary = (song) => {
    setLibrarySongs((prev) => {
      // avoid duplicates by title+artist
      if (prev.find(s => s.title === song.title && s.artist === song.artist)) {
        return prev;
      }
      return [...prev, song];
    });
  };

  return (
      <div className="App">
      <AsideLeft className="aside-left" />

      {/* HEADER SIEMPRE VISIBLE */}
      <Header
        onGoLibrary={() => setView("library")}
        onGoHome={() => setView("home")}
        view={view}
        onAddLibrary={addToLibrary}
      />

      {/* CONTENIDO VARIABLE */}
      {view === "library" && <Library songs={librarySongs} />}
    </div>
  );
}

export default App;

