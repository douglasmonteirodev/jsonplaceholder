import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import PhotoItem from "../components/PhotoItem";
import { AlbumType } from "../types/Album";
import { Photo } from "../types/Photo";

const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({
        id: 0,
        title: "",
        userId: 0,
    });

    useEffect(() => {
        if (params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, [params.id]);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photos = await api.getPhotosFromAlbum(id);
        setList(photos);
        setLoading(false);
    };

    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await api.getAlbum(id);
        setAlbumInfo(albumInfo);
    };

    const handleBackButton = () => {
        navigate(-1);
    };

    return (
        <div className='album--item'>
            <button className='back--btn' onClick={handleBackButton}>
                Voltar
            </button>
            {loading && "CARREGANDO..."}
            <h1>{albumInfo.title.toUpperCase()}</h1>
            {list.map((item, index) => (
                <PhotoItem key={index} data={item} />
            ))}
        </div>
    );
};

export default Album;
