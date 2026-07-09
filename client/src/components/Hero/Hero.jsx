import "./Hero.css";
import { useState, useEffect } from "react";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";

const slides = [
  {
    image: hero1,
  title: "Energize Society Reliable Energy",
  description: "Ecology limited are a fully independent specialist ecological consultancy, working across the UK  "
  },
{
image : hero2,
title : " A Clean Energy Revolution",
description : "Solar, wind, tidal, geothermal energy as well as advances in energy storage offer greener alternatives"
},
{
 image: hero3,
 title : "Renewable Solar solutons",
 description: "A perfect blend of global experience and expertise to further our focus on technology advancement"
}
];

function Hero() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrent((prev) => (prev + 1) % slides.length);

    }, 5000);

    return () => clearInterval(slider);

  }, []);

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[current].image})`
      }}
    >

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].description}</p>
        <button className="primary-btn">
          Discover More
        </button>

      </div>

    </section>

    

  );

}

export default Hero;