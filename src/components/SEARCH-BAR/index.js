import useFetchArtist from "../../Hooks/useFetchArtist";
import { useState, useEffect } from "react";

const SearchBar = ({ onArtistSelect }) =>{
    //Artista a buscar
    const [artistName, setArtistName] = useState("");
    const { artist, artistId, artistName: fetchedArtistName, loading, error } = useFetchArtist(artistName);

    // Notificar al padre cuando cambie el artistId
    useEffect(() => {
        onArtistSelect(artistId ?? null);
    }, [artistId, onArtistSelect]);


    const handleInputChange = (event) =>{
        setArtistName(event.target.value);
    }

    return(
        <>
        <input
            type="text"
            placeholder="Search"
            value={artistName}
            onChange={handleInputChange}
        />
        </>
    );
}

export default SearchBar;