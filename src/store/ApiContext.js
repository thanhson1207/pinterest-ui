import { useState, createContext } from 'react';
import useFetchdata from '../utils/useFetchdata';
const ApiContext = createContext();

function ApiProvider({ children }) {
    const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     const response = await fetch(`https://api.pexels.com/v1/search?query=cat&per_page=4&page=1`, {
    //         headers: {
    //             Authorization: '1xMN3dH6w220PxQJEEGU8QkklRPzhqnZDeyN8sR3uPsrOiGSKpV95CM5',
    //         },
    //     });
    //     const jsonData = await response.json();
    //     setData(jsonData.photos);
    // };

    return <ApiContext.Provider value={{ data, setData }}>{children}</ApiContext.Provider>;
}

export { ApiContext, ApiProvider };
