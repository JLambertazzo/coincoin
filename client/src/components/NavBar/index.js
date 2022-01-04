import React from 'react';
import './style.css';

class NavBar extends React.Component {

    render() {
        return (

                <div className='nav'>
                    <ul>
                        <li id='current'>Home</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Sale</li>
                    </ul>
                </div>
        );
    }
}

export default NavBar;
