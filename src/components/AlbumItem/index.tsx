import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
    id: number;
    title: string;
};

const AlbumItem = ({ id, title }: Props) => {
    return (
        <Link to={`/album/${id}`} className='album'>
            <h3>{title.toUpperCase()}</h3>
        </Link>
    );
};

export default AlbumItem;
