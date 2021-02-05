import React from 'react';
import {AiOutlineUser} from "react-icons/ai"

export default function Profile(props){
    return(
        <div onclick={console.log("cliquei")} className={props.className}>
            <AiOutlineUser/>
            <p>Minha Conta</p>
        </div>
    )
}