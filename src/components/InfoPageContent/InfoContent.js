import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './InfoContent.css';

function InfoContent() {
    const location = useLocation();
    const [imageData, setImageData] = useState(null);

    const fetchImageData = async () => {
        const response = await fetch(`https://api.pexels.com/v1/photos/${location.pathname.split('/')[2]}`, {
            headers: {
                Authorization: '1xMN3dH6w220PxQJEEGU8QkklRPzhqnZDeyN8sR3uPsrOiGSKpV95CM5',
            },
        });
        const data = await response.json();
        setImageData(data);
    };

    useEffect(() => {
        fetchImageData();
    }, [location.pathname]);

    if (!imageData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content-info">
            <div className="container-info">
                <div className="wrapper-image-infoPage">
                    <img className="image-info" src={imageData.src.original} />
                </div>
                <div className="photographer-info">
                    <h2 className="imageData-alt">{imageData.alt}</h2>
                    <h2 className="imageData-photographer">Author: {imageData.photographer}</h2>
                    <h2 className="imageData-comment">Comment</h2>
                    <p className="imageData-noComment">No comments yet!</p>
                    <a className="btn-open-image" href={imageData.src.original}>
                        See Pictures
                    </a>
                </div>
            </div>
        </div>
    );
}

export default InfoContent;
