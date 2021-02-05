import React from "react";
import Slider from "react-slick";

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
            {repeater(arrayImg)}
        </Slider>
    )
}