import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

class NavBar extends React.Component {


    render() {
        return (

                <div className='nav'>
                    <ul>
                        <Link to={'/home'}>
                            <li id={window.location.pathname === '/home' ? 'current' : ''}>Home</li>
                        </Link>
                        <Link to={'/women'}>
                        <li id={window.location.pathname === '/women' ? 'current' : ''}>Women</li>
                        </Link>
                        <Link to={'/men'}>
                        <li id={window.location.pathname === '/men' ? 'current' : ''}>Men</li>
                        </Link>
                        <Link to={'/sale'}>
                        <li id={window.location.pathname === '/sale' ? 'current' : ''}>Sale</li>
                        </Link>
                    </ul>
                </div>
        );
    }
}

export default NavBar;
