import { Link } from 'react-router-dom';
import './ImageItem.css';

function ImageItem({ data }) {
    return (
        <div className="wrapper-image">
            <Link
                to={{
                    pathname: `/info/${data.id}`,
                    state: { data: data },
                }}
            >
                <img className="image-item" src={data.src.tiny} />
            </Link>
        </div>
    );
}

export default ImageItem;
