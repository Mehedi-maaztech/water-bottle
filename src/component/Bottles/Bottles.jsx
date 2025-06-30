import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
// import { addToLS } from '../utilities/localstorage,js';
// import { getStoredCart } from '../utilities/localstorage,js';
// import { removeFromLS} from '../utilities/localstorage,js';

import { addToLS, getStoredCart, removeFormLS } from '../utilities/Localstorage';
import Cart from '../Cart/Cart';

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    useEffect(()=> {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    },[])

    const [cart, setCart] =useState([]);

    const handleAddToCart = (bottle) => {
        const newcart = [...cart, bottle]
        setCart(newcart);
        addToLS(bottle.id);
    }

    useEffect(()=> {
        console.log(bottles.length)
        if( bottles.length){
            const storedCart = getStoredCart();
            console.log(storedCart);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id == id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
    } ,[bottles])


    const handleRemoveCart = (id) => {
        //visual remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        //Remove from ls
        removeFormLS(id);
    }

    return (
        <div>
            <h4>Bottles {bottles.length}</h4>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            <div className='bottles-conatiner'>
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)}
            </div>
        </div>
    );
};

export default Bottles;