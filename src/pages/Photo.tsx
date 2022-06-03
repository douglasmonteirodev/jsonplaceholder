import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { Photo as PhotoType } from "../types/Photo";

const Photo = () => {
    const [loading, setLoading] = useState(false);
    const [photoInfo, setPhotoInfo] = useState<PhotoType>();

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            loadPhotos(params.id);
        }
    }, [params.id]);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photo = await api.getPhoto(id);
        setPhotoInfo(photo);
        setLoading(false);
    };

    const handleBackButton = () => {
        navigate(-1);
    };

    return (
        <div>
            {loading && "Carregando..."}
            {photoInfo && (
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <p>{photoInfo.title}</p>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </>
            )}
        </div>
    );
};

export default Photo;
