import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageItem from '../ImageComponent/ImageItem';

function ResultPage() {
    const location = useLocation();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.pexels.com/v1/search?query=${location.state.searchValue}&per_page=60&page=1`,
                {
                    headers: {
                        Authorization: '1xMN3dH6w220PxQJEEGU8QkklRPzhqnZDeyN8sR3uPsrOiGSKpV95CM5',
                    },
                },
            );
            const data = await response.json();
            setResult(data.photos);
        };
        fetchData();
    }, [location]);

    return (
        <div className="wrapper-body">
            <div className="wrapper-items">
                {result.map((item) => (
                    <ImageItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default ResultPage;
