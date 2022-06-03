import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
    id: number;
    title: string;
};

const AlbumItem = ({ id, title }: Props) => {
    return (
        <Link to={`/album/${id}`} className='album'>
            <h4>{title}</h4>
        </Link>
    );
};

export default AlbumItem;
