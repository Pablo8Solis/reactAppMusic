import { useParams } from "react-router-dom";
import useFetchTracks from "../../Hooks/useFetchSongs";

const TrackList = ({ albumId}) => {
	const params = useParams();
	const id = params.id ?? albumId ?? null; 
	const { tracks, loading, error, album} = useFetchTracks(id); 

	if (!id) return <p>Selecciona un álbum</p>;
	if (loading) return <p>Cargando canciones...</p>;
	if (error) return <p>Error al cargar las canciones.</p>;

	return (
		<section className="song-detail">
            
			
			 <div className="album-header">
				{album?.cover_medium && (
					<img className="song-detail-img" src={album.cover_medium} alt={album?.title || 'Portada'} />
				)}
               <div className="album-info">
                <h2 className="song-detail-title ">{album?.title || 'Canciones'}</h2> <br />
                 <h2 className="song-detail-artist span">{album?.artist?.name || 'Artista no disponible'}</h2>
                 <p>Dolby Atmos Lossless</p>
                 <div className="song-detail-button-container">
                <button className="song-detail-button">▶ Reproducir</button>
                 <button className="song-detail-button">≍ Aleatorio</button>
                
               </div>
               </div>
			</div>
            <div>
            
			<ul className="song-detail-content">
				{tracks.map((track) => (
					<li key={track.id} className="song-detail-content-songs">▶ {track.title} {track.image}</li>
				))}
			</ul>
			</div>
		</section>
	);
}

export default TrackList;
