import { useContext } from 'react';
import './content.css';
import useFetchdata from '../../utils/useFetchdata.js';
import { ApiContext } from '../../store/ApiContext.js';
import ImageItem from '../ImageComponent/ImageItem.js';

function Content() {
    const { data } = useContext(ApiContext);
    if (!data) {
        return;
    }
    return (
        <div className="wrapper-body">
            <div className="wrapper-items">
                {data.map((item) => (
                    <ImageItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Content;
