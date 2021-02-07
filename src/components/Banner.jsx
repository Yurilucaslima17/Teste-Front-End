import React from "react";
import Slider from "react-slick";
import bannerPrincipal from "../assets/banner-principal.png";
import "../styles/banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner(){

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      function importAll(r) {
        return r.keys().map(r);
      }

      function repeater (prop) {
        return prop.map(path => {
          return <div><img src={path.default} alt={path} style={{width:"inherit"}}/></div>;
        });
      };

      const arrayImg = importAll(
        require.context("../assets/banners/", true, /\.(png|jpe?g|svg)$/)
      );

    return(
        <Slider {...settings}>
          <div>
          <div className="banner">
            <div className="text">
              <p>Olá, o que você está buscando?</p>
              <p><strong>Criar ou migrar seu e-commerce?</strong></p>
            </div>
            <img src={bannerPrincipal} alt=""/>
          </div>
          </div>
            {/* {repeater(arrayImg)} */}
        </Slider>
    )
}