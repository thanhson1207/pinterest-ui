import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounced';

function useFetchdata(query) {
    const [data, setData] = useState([]);

    const debounced = useDebounce(query, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }
        // ${encodeURIComponent(debounced)}
        fetch(`https://api.pexels.com/v1/search?query=CAT&per_page=4&page=1`, {
            headers: {
                Authorization: '1xMN3dH6w220PxQJEEGU8QkklRPzhqnZDeyN8sR3uPsrOiGSKpV95CM5',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data.photos);
                console.log(data.photos);
            });
    }, [debounced]);

    return data;
}

export default useFetchdata;
