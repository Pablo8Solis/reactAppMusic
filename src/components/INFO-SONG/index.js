import { useParams } from "react-router-dom";
import useFetchTracks from "../../Hooks/useFetchSongs";

const TrackList = ({ albumId}) => {
    const params = useParams();
        const id = params.id ?? albumId ?? null; 
        const { tracks, loading, error, album,  } = useFetchTracks(id); 

    if (!id) return <p>Selecciona un álbum</p>;
    if (loading) return <p>Cargando canciones...</p>;
    if (error) return <p>Error al cargar las canciones.</p>;

    return (
        <section className="song-detail">

            <div>
            <ul className="song-detail-content">
                {tracks.map((track) => (
                    <li key={track.id} className="song-detail-content-songs">{track.title} {track.image}</li>
                ))}
            </ul>
            </div>
             <div className="album-header">
                {album?.cover_medium && (
                    <img className="song-detail-img" src={album.cover_medium} alt={album?.title || 'Portada'} />
                )}
                <h2 className="song-detail-title">{album?.title || 'Canciones'}</h2>
            </div>
        </section>
    );
}

export default TrackList;