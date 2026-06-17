import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, resetResults } from "../../Redux/slices/searchSlice";
import { SearchInput } from "./styles";

const SearchBar = () => {
    const [artistName, setArtistName] = useState("");
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.search.loading);

    useEffect(() => {
        const query = artistName.trim();
        if (query) {
            dispatch(fetchSongs(query));
        } else {
            dispatch(resetResults());
        }
    }, [artistName, dispatch]);

    const handleInputChange = (event) => {
        setArtistName(event.target.value);
    };

    return (
        <>
            <SearchInput
                type="text"
                placeholder="Search"
                value={artistName}
                onChange={handleInputChange}
                $hasValue={artistName.trim().length > 0}
            />
            {loading && <p style={{ color: 'white', marginTop: '10px' }}>Cargando canciones...</p>}
        </>
    );
};

export default SearchBar;
