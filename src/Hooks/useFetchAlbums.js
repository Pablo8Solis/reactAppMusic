import axios from "axios";
import { useEffect, useState } from "react";


const useFetchAlbums = (artistId) => {
    const [albums, setAlbums]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [img, setImg] = useState(null);
    const [titleAlbum, setTitleAlbum] = useState(null);


    useEffect(() =>{
        const fetchAlbums = async ()=>{
            if (!artistId) {
                setAlbums([]);
                setLoading(false);
                setError(null);
                return;
            }
            setLoading(true);
            setError(null);
            try{
                const response = await axios.get(`/artist/${artistId}/albums`);
                setAlbums(response.data?.data ?? []);
                console.log("los albumes son:", response.data?.data ?? []);
                setImg(response.data?.data?.[3]?.cover_medium);
                setTitleAlbum(response.data?.data?.[3]?.title);
            } catch(error){
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchAlbums();
    }, [artistId]);
    return { albums, loading, error, img, titleAlbum };
}

export default useFetchAlbums;