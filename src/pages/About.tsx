import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from '../components/Footer';

export default function About() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 10000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false
  };
  return (
    <>
    <div id='about-container'>
      <div className='about-content'>
        {/* <div className="about-latch-pizzeria">
          <p>Vår meny bjuder på det bästa av två världar krispiga pizzor direkt ur ugnen och grillat med härlig rökig smak. Alltid med färska råvaror och passion i varje tugga.</p>
        </div> */}
        <div className='about-slider-section'>
          <Slider {...settings} className="about-slider">
            <div className="about-slider-img">
              <img src="olikapizzor.jpg" alt="Bild 1" />
            </div>
            <div className="about-slider-img">
              <img src="foto1.png" alt="Bild 2" />
            </div>
            <div className="about-slider-img">
              <img src="bildute.jpg" alt="Bild 3" />
            </div>
          </Slider>
          <div className='aabout-description'>
            <h2>LATCH PIZZERIA</h2>
            <h3>ALLTID NYTT, ALLTID GOTT <br />
              FRÅN VÅR KÖK TILL DITT BORD</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci nisi consequuntur modi itaque tenetur hic. A porro consequuntur voluptatum minima, eaque aliquid doloremque provident eum asperiores maxime quasi nulla?</p>
            {/* <h2>Konceptet</h2> */}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
