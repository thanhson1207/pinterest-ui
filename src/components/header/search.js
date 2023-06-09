import React, { useEffect, useContext } from 'react';
import './search.css';
import { useState, useRef } from 'react';

import Tippy from '@tippyjs/react/headless'; 
import 'tippy.js/dist/tippy.css'; 
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useDebounce from '../../hooks/useDebounced';

import { ApiContext } from '../../store/ApiContext';

import { Navigate, useNavigate } from 'react-router-dom';

function Search() {
    const { setData } = useContext(ApiContext);
    const [initialSearchValue, setInitialSearchValue] = useState('Search');
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const [showResult, setShowResult] = useState(false);
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    const debounced = useDebounce(searchValue, 500);

    const navigate = useNavigate();

    useEffect(() => {
        if (searchValue === 'Search' || searchValue === '') {
            setShowCloseIcon(false);
        } else {
            setShowCloseIcon(true);
        }
    }, [searchValue]);

    useEffect(() => {
        if (!debounced.trim()) {
            setData([]);
            return;
        }

        const fetchData = async () => {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${debounced}&per_page=60&page=1`, {
                headers: {
                    Authorization: '1xMN3dH6w220PxQJEEGU8QkklRPzhqnZDeyN8sR3uPsrOiGSKpV95CM5',
                },
            });
            const data = await response.json();
            setData(data.photos);
        };
        fetchData();
    }, [debounced]);

    const inputRef = useRef();
    const tippyRef = useRef();

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigate(`/search/${encodeURIComponent(searchValue)}`, { state: { searchValue: searchValue } });
        }
    };

    return (
        // <Tippy
        //     instance={tippyRef}
        //     interactive
        //     visible={showResult && data.length > 0}
        //     render={(attrs) => (
        //         <div className="tippy-search" tabIndex="-1" {...attrs}>
        //             {data.slice(0, 5).map((result) => (
        //                 <button key={result.id} className="search-result">
        //                     {result.alt}
        //                 </button>
        //             ))}
        //         </div>
        //     )}
        //     onClickOutside={handleHideResult}
        // >
        <div className="search">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            <input
                ref={inputRef}
                value={searchValue === initialSearchValue ? '' : searchValue}
                className="search-input"
                placeholder="Search"
                spellCheck={false}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
                onKeyDown={handleKeyDown}
            />
            {showCloseIcon && (
                <FontAwesomeIcon
                    className="close-search-icon"
                    icon={faCircleXmark}
                    onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus();
                    }}
                />
            )}
        </div>
        // </Tippy>
    );
}

export default Search;
