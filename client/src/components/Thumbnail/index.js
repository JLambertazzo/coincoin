import React from 'react';
import './style.css';
import hm from '../logos/hm.png';

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            price: this.props.price,
            brand: this.props.brand,
            image: this.props.image,
        }
    }
    getBrandLogo() {
        let brand = this.state.brand
        if (brand === 'H&M') {
            return hm;
        }
    }
    render() {
        return (
            <div className='thumbnail-cont'>
                <div className='img-cont'>
                    <img src={this.state.image}/>
                </div>
                <div className='desc-cont'>
                    <div className='titles'>
                        <p className='item-name'>{this.state.name}</p>
                        <p className='item-price'>${this.state.price}</p>
                    </div>
                    <img className='brand-logo' src={this.getBrandLogo()}/>
                </div>

            </div>
        );
    }
}

export default Thumbnail;
