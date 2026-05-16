import axios from "axios";
import { useEffect, useState } from "react";    

const useFetchTracks = (albumId)=>{
const [tracks, setTracks] = useState([]);
const [album, setAlbum] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
    if(!albumId) return;

    const fetchTracks = async () =>{
        setLoading(true);
        setError(null);
        try{
            // obtener tracks y metadata del álbum en paralelo
            const [tracksRes, albumRes] = await Promise.all([
                axios.get(`/album/${albumId}/tracks`),
                axios.get(`/album/${albumId}`)

            ]);

            setTracks(tracksRes.data?.data ?? []);
            setAlbum(albumRes.data ?? null);
            console.log("las canciones son:", tracksRes.data?.data ?? []);
        } catch(err){
            setError(err);
        } finally{
            setLoading(false);
        }
    }

    fetchTracks();
}, [albumId]);

return { tracks, loading, error, album };
}

export default useFetchTracks;