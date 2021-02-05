import React from 'react'
import logo from "../assets/logo-corebiz-preto-cinza.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Searcher from "./Searcher";
import Profile from "./Profile";
import Cart from "./Cart";
import "../styles/header.scss";

export default function Header(){

    return(
        <div className="header">
            <GiHamburgerMenu className="mobile-menu"/>
            <picture className="menu">
                <img src={logo} alt=""/>
            </picture>
            <Searcher className="menu menu-search"/>
            <Profile className="menu menu-profile"/>
            <Cart className="menu menu-cart"/>
        </div>
    )
}