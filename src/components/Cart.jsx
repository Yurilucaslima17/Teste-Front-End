import React, {useState, useEffect} from 'react';
import {TiShoppingCart} from "react-icons/ti";

export default function Cart(props) {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        function getItems(){
            if(window.localStorage.getItem("@Teste-Front-End/commerceCart")){ 
                setProducts(JSON.parse(window.localStorage.getItem("@Teste-Front-End/commerceCart")));
            }
        }
        getItems();
    }, []);


    const removeItemToCart = (productId) =>{
            let cartProducts = products.filter(product => product.productId !== productId);
            setProducts(cartProducts);
            localStorage.setItem(`@Teste-Front-End/commerceCart`, JSON.stringify(products));
    }
    
    return(
        <div className={props.className}>
            <TiShoppingCart/>
            <span>{products.length || 0}</span>
        </div>
    )
}