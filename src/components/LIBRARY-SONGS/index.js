import React from "react";
import Songs from '../SONG-CM';

const Library = ({ songs }) => {
 

    return(
            
            <section className="library">
            <h2 className='library-title'>Tu biblioteca</h2>
            <div className='library-content'>
                <div className='library-content-songs'>
                    {songs.length > 0 ? (
                        songs.map((song, idx) => (
                            <Songs
                                key={idx}
                                title={song.title}
                                artist={song.artist}
                                imgSrc={song.img}
                                alt={song.title}
                                hideAddButton 
                            />
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