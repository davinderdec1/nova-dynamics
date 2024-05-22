import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false 
  };

  return (
    <div className="carousel-container">
      <div className="stars"></div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imageUrl} alt={item.title} className="carousel-image" />
            {item.title || item.content ? (
              <div className="carousel-caption">
                {item.title && <h3>{item.title}</h3>}
                {item.content && <p>{item.content}</p>}
              </div>
            ) : null}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
