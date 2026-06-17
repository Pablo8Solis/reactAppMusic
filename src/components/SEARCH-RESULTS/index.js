import React from "react";
import Songs from "../SONG-CM";
import { HeaderP, SectionTopRecientes } from "../HEADER/styles";
import { LoaderImg, SongLink } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../Redux/slices/librarySlice";

const SearchResults = () => {
    const dispatch = useDispatch();
    const { results, loading, error } = useSelector((state) => state.search);

    return (
        <>
            <HeaderP $topSpace="6.5rem">Resultados de búsqueda</HeaderP>
            <SectionTopRecientes>
                {error ? (
                    <p style={{ color: 'red' }}>Error al cargar los resultados: {error}</p>
                ) : loading ? (
                    <LoaderImg src="/assets/img/Loader.gif" alt="Loading" />
                ) : results && results.length > 0 ? (
                    results.map((album) => (
                        <SongLink key={album.id || album.title} to={`/song/${album.id}`}>
                            <Songs
                                title={album.title}
                                artist={album?.artist?.name || ''}
                                imgSrc={album.cover_medium || album.cover || ''}
                                alt={album.title}
                                onAdd={() => {
                                    dispatch(addSong({
                                        id: album.id,
                                        title: album.title,
                                        artist: album?.artist?.name || '',
                                        imgSrc: album.cover_medium || album.cover || '',
                                    }))
                                }}
                            />
                        </SongLink>
                    ))
                ) : (
                    <p style={{ color: 'gray' }}>No hay busqueda reciente</p>
                )}
            </SectionTopRecientes>
        </>
    );
};

export default SearchResults;
