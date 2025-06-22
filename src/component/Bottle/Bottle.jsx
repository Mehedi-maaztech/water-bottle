import React from 'react';
import './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name, seller, price, img} = bottle;
    return (
        <div className='bottle'>
            <h3>Name : {name}</h3>
            <p><small>Seller : {seller}</small></p>
            <p>Price : {price}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;