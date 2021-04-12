import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';

function HeroSection() {
  return (
    
    <Carousel >
      <Carousel.Item >
        <img
          
          className="d-block w-100"
          src="images/img-14.jpg"
          alt="First slide"
          height="750px"
        />
        <Carousel.Caption>
          <h3>Farmapp</h3>
          <p>Tu aliado en salud.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/img15.jpg"
          alt="Second slide"
          height="750px"
        />

        <Carousel.Caption>
          <h3>Precios bajos</h3>
          <p>Encuentra las mejores ofertas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/img-11.jpg"
          alt="Third slide"
          height="750px"
        />

        <Carousel.Caption >
          <h3>Eficiente</h3>
          <p >Lo que quieres de manera rápida y fácil.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    
    /*
    <div className='hero-container'>

      <h1>Farmapp</h1>
      <p>Tu aliado en salúd</p>

    </div>
    */

  );
}

export default HeroSection;
