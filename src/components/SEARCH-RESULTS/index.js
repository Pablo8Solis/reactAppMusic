import React from "react";
import Songs from "../SONG-CM";
import useFetchAlbums from "../../Hooks/useFetchAlbums";
import { Link } from "react-router-dom";

const SearchResults = ({ artistId, onAddLibrary }) => {
    const { albums, loading, error } = useFetchAlbums(artistId);

    return (
        <>
            <p className='header-p header-p-1'>Buscados recientemente</p>
            <section className='section-top-recientes'>
                { error ? (
                    <p>Error al cargar los resultados.</p>
                ) : loading?(<img className="loader" src="/assets/img/Loader.gif" alt="Loading" />): albums.length > 0 ? (
                    albums.map((album) => (
                        <Link className="song-link" key={album.id || album.title} to={`/song/${album.id}`}>
                            <Songs
                                title={album.title}
                                artist={album?.artist?.name || ''}
                                imgSrc={album.cover_medium || album.cover || ''}
                                alt={album.title}
                                onAdd={() => onAddLibrary && onAddLibrary({ title: album.title, artist: album?.artist?.name || '', img: album.cover_medium || '' })}
                            />
                        </Link>
                    ))
                ) : (
                   <p></p>
                )}
            </section>
        </>
    );
};

export default SearchResults;