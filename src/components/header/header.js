import './header.css';
import React from 'react';
import { faAngleDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Search from './search';
import { faFaceDizzy, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { logout } from '../../Auth/firebase';

function Header({ name }) {
    return (
        <div className="wrapper-header">
            <div className="inner">
                <img className="logo" height="50" width="50" src="/logo.jpeg" alt="Home" />

                <a className="Home-btn" href="/">
                    Home
                </a>

                <Tippy
                    interactive
                    trigger="click"
                    render={(attrs) => (
                        <div className="tippy-create" tabIndex="-1" {...attrs}>
                            <button className="create-idea-pin">Create an idea pin</button>
                            <button className="create-pin">Create a pin</button>
                        </div>
                    )}
                >
                    <div className="create">
                        <button className="create-btn">Create</button>
                        <button className="create-icon">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                </Tippy>

                {/* search */}
                <Search />
                {/* <Tippy
                    interactive
                    trigger="click"
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="tippy-notification" tabIndex="-1" {...attrs}>
                            <h3 className="update">Update</h3>
                            <div className="update-container">Update Container</div>
                        </div>
                    )}
                >
                    <button className="notification-btn" id="disabled">
                        <FontAwesomeIcon icon={faBell} />
                    </button>
                </Tippy>

                <button className="message-btn " id="disabled">
                    <FontAwesomeIcon icon={faCommentDots} />
                </button>

                <Link to="/infomation" className="information-btn" id="disabled">
                    <FontAwesomeIcon icon={faPerson} />
                </Link> */}

                <button className="name-Account">
                    <FontAwesomeIcon className="name-Account-icon" icon={faFaceSmileBeam} />
                    <p className="name-Account-value">{name}</p>
                </button>

                <button className="account-icon" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
            </div>
        </div>
    );
}

export default Header;
