import Slider from "react-slick";
import api from "../services/api";
import Product from "./Product";
import {useState, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/bestSellers.scss";

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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
      };

    return(
        <section className="best-sellers">
            <h3>Mais Vendidos</h3>
            <Slider {...settings} className="slider">
                {products.map(element => {
                    return <Product {...element}/>
                })}
            </Slider>
        </section>
    )
}