import React, {useState} from 'react'
import logo from "../assets/logo-corebiz-preto-cinza.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Searcher from "./Searcher";
import Profile from "./Profile";
import Cart from "./Cart";
import "../styles/header.scss";

export default function Header(){
    const [active, isActive] = useState(false);

    const toogleActive = () =>{
        isActive(!active);
        console.log(active)
    }

    return(
        <header className="header">
            <GiHamburgerMenu className="mobile-menu" onClick={toogleActive}/>
            <picture className="menu">
                <img src={logo} alt=""/>
            </picture>
            <Searcher className="menu menu-search"/>
            <Profile className={`menu menu-profile ${active ? 'active' : ''}`}/>
            <Cart className="menu menu-cart"/>
        </header>
    )
}