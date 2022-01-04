import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar'

class Home extends React.Component {

    render() {
        return (
            <div className='home'>
            <NavBar/>
            </div>
        );
    }
}

export default Home;
