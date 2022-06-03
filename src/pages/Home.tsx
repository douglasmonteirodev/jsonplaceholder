import { useEffect, useState } from "react";
import { api } from "../api";
import AlbumItem from "../components/AlbumItem";

import { AlbumType } from "../types/Album";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<AlbumType[]>();

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setLoading(true);
        const albums = await api.getAlbums();
        setList(albums);
        setLoading(false);
    };

    return (
        <div>
            {loading && "CARREGANDO..."}
            {list?.map((item, index) => (
                <AlbumItem key={index} id={item.id} title={item.title} />
            ))}
        </div>
    );
};

export default Home;
