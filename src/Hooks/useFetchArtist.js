// Aqui va el fetching de las canciones}
import { useState, useEffect } from "react";
import axios from "axios";


const useFetchArtist = (nameArtist)=>{
    const [artist, setArtist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [artistId, setArtistId] = useState(null);
    const [artistName, setArtistName] = useState(null);


    useEffect(() =>{
        const fetchArtist = async () =>{
            try{
                    const response = await axios.get(`/search/artist?q=${nameArtist}`);
                    setArtist(response.data?.data ?? []);
                    const artistId = response.data?.data?.[0]?.id;
                    const artistName = response.data?.data?.[0]?.name;
                    console.log("Artist Name:", artistName);
                    setArtistId(artistId);
                    setArtistName(artistName);
                    console.log("[useFetchArtist] Artist ID:", artistId);
                } catch(error){
                    setError(error);
                }
            setLoading(false);
        }

        fetchArtist();
    }, [nameArtist]);
    return { artist, loading, error, artistId, artistName };
}
export default useFetchArtist;