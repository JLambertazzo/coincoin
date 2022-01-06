import React from 'react';
import './style.css';
import NavBar from '../../components/NavBar'
import Thumbnail from "../../components/Thumbnail";

class Home extends React.Component {

    render() {
        return (
            <div className='home'>
            <NavBar/>
                <div className='itemsCont'>
                    <Thumbnail
                    name="Puffy Jacket"
                    price={29.99}
                    brand={'H&M'}
                    image={'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff9%2Fe2%2Ff9e26c6cc40faa4e2c5d6397263edd515309872d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile:/product/main'}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
