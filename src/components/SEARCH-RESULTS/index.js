import React from "react";
import Songs from "../SONG-CM";

const SearchResults = ({ searchResults, onAddLibrary }) => {
    return (
        <>
            <p className='header-p header-p-1'>Buscados recientemente</p>
            <section className='section-top-recientes'>
                {searchResults.map((song, index) => (
                    <Songs
                        key={`${song.title}-${song.artist}-${index}`}
                        title={song.title}
                        artist={song.artist}
                        imgSrc={song.img}
                        alt={song.title}
                        onAdd={() => onAddLibrary && onAddLibrary(song)}
                    />
                ))}
            </section>
        </>
    );
};

export default SearchResults;