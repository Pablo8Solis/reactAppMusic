import React, {Component, component} from 'react'
import Songs from '../SONG-CM';

class Library extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            // se pueden meter otros metodos para el componente sino inicializar solo el estado
        }
    }


    render(){
        const songs = this.props.songs || [];
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
    }
};

export default Library;