import React from 'react';
import {TiShoppingCart} from "react-icons/ti";

export default function Cart(props) {

    var count = window.localStorage.getItem("commerceCart") ? window.localStorage.getItem("commerceCart").length : 0;
    
    return(
        <div className={props.className}>
            <TiShoppingCart/>
            <span>{count}</span>
        </div>
    )
}