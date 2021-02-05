import React from 'react';
import { FaSistrix } from "react-icons/fa";

export default function Searcher(props) {
    return(
        <div className={props.className}>
            <input type="search" placeholder="O que está procurando?"/>
            <FaSistrix/>
        </div>
    )
}