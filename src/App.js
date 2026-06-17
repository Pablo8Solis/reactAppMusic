import React, { useState } from "react";
import AsideLeft from "./components/ASIDE-L";
import Header from "./components/HEADER";
import Library from "./components/LIBRARY-SONGS";
import { Route, Routes } from "react-router-dom";
import TrackList from "./components/SONG-DETAIL";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {

  const [view, setView] = useState("home");

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
            />
            
             {view === "library" && <Library />}
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