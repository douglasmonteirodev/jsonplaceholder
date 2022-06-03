import { Link } from "react-router-dom";
import "./styles.css";
import { Photo } from "../../types/Photo";

type Props = {
    data: Photo;
};

const PhotoItem = ({ data }: Props) => {
    return (
        <Link className='photo' to={`/photo/${data.id}`}>
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );
};

export default PhotoItem;
