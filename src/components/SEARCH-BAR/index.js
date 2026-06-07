import useFetchArtist from "../../Hooks/useFetchArtist";
import { useState, useEffect } from "react";
import { SearchInput } from "./styles";

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
        <SearchInput
            type="text"
            placeholder="Search"
            value={artistName}
            onChange={handleInputChange}
            $hasValue={artistName.trim().length > 0}
        />
        </>
    );
}

export default SearchBar;