import Slider from "react-slick";
import api from "../services/api";
import Product from "./Product";
import {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BestSellers(){
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        async function getProducts(){
            try{
                const { data } = await api.get('/api/v1/products');
                setProducts(data);
            } catch(error){
                console.log(error);
            }
        }
        getProducts();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <Slider {...settings}>
            {products.map(element => {
                return <Product {...element}/>
            })}
        </Slider>
    )
}