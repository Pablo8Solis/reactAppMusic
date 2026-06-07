import React, { useEffect, useState } from "react";
import AsideLeft from "./components/ASIDE-L";
import Header from "./components/HEADER";
import Library from "./components/LIBRARY-SONGS";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SEARCH-BAR";
import TrackList from "./components/SONG-DETAIL";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";

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

  //Albumes de la API
  const [artistId, setArtistId] = useState(null);
   
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
      setSearchResults([]);
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
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <div className="App">
        <Routes>
      <Route
        path="/"
        element={
          <>
            <AsideLeft className="aside-left" />
            <Header
              onGoLibrary={() => setView("library")}
              onGoHome={() => setView("home")}
              view={view}
              onSearch={handleSearch}
              searchResults={searchResults}
              onAddLibrary={addToLibrary}
              onArtistSelect={setArtistId}
              artistId={artistId}
            />
            
             {view === "library" && <Library songs={librarySongs} />}
          </>
        }
      />

      <Route path="/song/:id" element={<TrackList />} />

      {/* ruta de song info que mostrara la informacion de las canciones seleccionadas */}
    </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;