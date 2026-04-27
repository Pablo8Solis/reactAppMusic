import React, { useEffect, useState } from "react";
import AsideLeft from "./components/ASIDE-L";
import Header from "./components/HEADER";
import Library from "./components/LIBRARY-SONGS";

const fakeSongs = [
  { title: "Submarine", artist: "The Marias", img: "/assets/img/submarine.webp" },
  { title: "Mami 100pre sabe", artist: "Alvaro Díaz", img: "/assets/img/100pre.webp" },
  { title: "Debí tirar mas fotos", artist: "Bad Bunny", img: "/assets/img/DiTM.webp" },
  { title: "Terraza", artist: "WOS", img: "/assets/img/terraza.webp" },
  { title: "Intro", artist: "Young Miko", img: "/assets/img/notDis.webp" },
  { title: "No one noticed", artist: "The Marias", img: "/assets/img/noticed.webp" },
  { title: "SISÍFO", artist: "Nsqk", img: "/assets/img/SISÍFO.jpeg" },
];

function App() {
  const [view, setView] = useState("home");
  const [searchResults, setSearchResults] = useState(fakeSongs);
  const [librarySongs, setLibrarySongs] = useState([]);

  useEffect(() => {
    if (librarySongs.length > 0) {
      console.log("La biblioteca se ha actualizado:", librarySongs);
    }
  }, [librarySongs]);

  const handleSearch = (query) => {
    const value = query.trim().toLowerCase();

    if (!value) {
      setSearchResults(fakeSongs);
      return;
    }

    const results = fakeSongs.filter((song) =>
      song.title.toLowerCase().includes(value) ||
      song.artist.toLowerCase().includes(value)
    );

    setSearchResults(results);
  };


  const addToLibrary = (song) => {
    setLibrarySongs((prev) => {
      if (prev.find((s) => s.title === song.title && s.artist === song.artist)) {
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
        onSearch={handleSearch}
        searchResults={searchResults}
        onAddLibrary={addToLibrary}
      />

      {/* CONTENIDO VARIABLE */}
      {view === "library" && <Library songs={librarySongs} />}
    </div>
  );
}

export default App;

