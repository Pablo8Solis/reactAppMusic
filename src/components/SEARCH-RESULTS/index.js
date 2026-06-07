import React from "react";
import Songs from "../SONG-CM";
import useFetchAlbums from "../../Hooks/useFetchAlbums";
import { HeaderP, SectionTopRecientes } from "../HEADER/styles";
import { LoaderImg, SongLink } from "./styles";

const SearchResults = ({ artistId, onAddLibrary }) => {
    const { albums, loading, error } = useFetchAlbums(artistId);

    return (
        <>
            <HeaderP $topSpace="6.5rem">Buscados recientemente</HeaderP>
            <SectionTopRecientes>
                { error ? (
                    <p>Error al cargar los resultados.</p>
                ) : loading?(<LoaderImg src="/assets/img/Loader.gif" alt="Loading" />): albums.length > 0 ? (
                    albums.map((album) => (
                        <SongLink key={album.id || album.title} to={`/song/${album.id}`}>
                            <Songs
                                title={album.title}
                                artist={album?.artist?.name || ''}
                                imgSrc={album.cover_medium || album.cover || ''}
                                alt={album.title}
                                onAdd={() => onAddLibrary && onAddLibrary({ title: album.title, artist: album?.artist?.name || '', img: album.cover_medium || '' })}
                            />
                        </SongLink>
                    ))
                ) : (
                   <p></p>
                )}
            </SectionTopRecientes>
        </>
    );
};

export default SearchResults;