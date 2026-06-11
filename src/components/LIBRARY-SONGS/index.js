import React from "react";
import Songs from '../SONG-CM';
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../../Redux/libraryActions";

const Library = () => {

    const dispatch = useDispatch();
    const songs = useSelector((state) => state)


    return (

        <section className="library">
            <h2 className='library-title'>Tu biblioteca</h2>
            <div className='library-content'>
                <div className='library-content-songs'>
                    {songs.length > 0 ? (
                        songs.map((song) => (
                            <div key={song.id} className="library-song-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', }} >
                                <Songs
                                    key={`${song.title}-${song.artist}`}
                                    title={song.title}
                                    artist={song.artist}
                                    imgSrc={song.imgSrc}
                                    alt={song.title}
                                    hideAddButton
                                />
                                <button style={{ backgroundColor: 'grey', color: 'white', border: `none`, cursor: 'pointer', fontSize: '1.5rem', height: '4rem', borderRadius: '5px' }} onClick={() => dispatch(removeSong(song.id))}>
                                    x
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay canciones guardadas.</p>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Library;