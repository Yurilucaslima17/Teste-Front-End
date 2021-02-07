import MoedaBrl from "../helpers/moedaBRL";
import ReactStars from "react-rating-stars-component";
import "../styles/products.scss";

export default function Product(props){
    
    const ratingChanged = (newRating) =>{
        localStorage.setItem(`@Teste-Front-End/RatingProduct${props.productId}`, `${newRating}`)
    }

    const getRatingValue = () =>{
            return localStorage.getItem(`@Teste-Front-End/RatingProduct${props.productId}`) ? 
            Number(localStorage.getItem(`@Teste-Front-End/RatingProduct${props.productId}`)) : 0
    }

    return(
        <div className="products">
            <img src={props.imageUrl} alt={props.productName}/>
            <p>{props.productName}</p>
            <ReactStars count={5} isHalf={false}  activeColor="#F8475F" onChange={ratingChanged} value={getRatingValue}/>
            {props.listPrice ? <p className="light-price">de {MoedaBrl(props.listPrice/100)}</p> : <p> </p>}
            <p><b>por {MoedaBrl(props.price/100)}</b></p>
            {props.installments[0] ? <p className="light-price">ou em {props.installments[props.installments.length-1].quantity}x de {MoedaBrl(props.installments[props.installments.length-1].value/100)}</p> : <p> </p>}
        </div>
    )
}