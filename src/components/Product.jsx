import React, {useState, useEffect} from 'react';
import MoedaBrl from "../helpers/moedaBRL";
import ReactStars from "react-rating-stars-component";
import "../styles/products.scss";
import flag from "../assets/flag.png";

export default function Product(props){
    const [ratting, setRatting] = useState(null);

    useEffect(() =>{
        console.log("entrei",ratting);
        getRatingValue();
    },[ratting])

    const ratingChanged = (newRating) =>{
        localStorage.setItem(`@Teste-Front-End/RatingProduct${props.productId}`, `${newRating}`)
    }

    const getRatingValue = () =>{
            return localStorage.getItem(`@Teste-Front-End/RatingProduct${props.productId}`) ? 
            setRatting(Number(localStorage.getItem(`@Teste-Front-End/RatingProduct${props.productId}`))) : setRatting(props.stars)
    }

    const addItemToCart = () =>{
        let products = [];
        if(localStorage.getItem(`@Teste-Front-End/commerceCart`)){
            products = JSON.parse(localStorage.getItem(`@Teste-Front-End/commerceCart`));
        }
            products.push(props);
            localStorage.setItem(`@Teste-Front-End/commerceCart`, JSON.stringify(products));
            window.location.reload();
    }

    return(
        <div className="products">
            <img src={props.imageUrl} alt={props.productName}/>
            {props.listPrice && <img src={flag} alt="Off" className="flag"/>}
            <div className="description">
                <p className="product-name">{props.productName}</p>
                {ratting !== null && <ReactStars count={5} isHalf={false}  activeColor="#F8475F" onChange={ratingChanged} value={ratting}/>}
                {props.listPrice ? <p className="light-price">de {MoedaBrl(props.listPrice/100)}</p> : <p> </p>}
                <p><b>por {MoedaBrl(props.price/100)}</b></p>
                {props.installments[0] ? <p className="light-price">ou em {props.installments[props.installments.length-1].quantity}x de {MoedaBrl(props.installments[props.installments.length-1].value/100)}</p> : <p> </p>}
                <button onClick={addItemToCart} className="btn-buy">COMPRAR</button>
            </div>
        </div>
    )
}