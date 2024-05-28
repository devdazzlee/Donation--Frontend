import React, { useState } from 'react';
import './Footer.css';
import img1 from '../banner1.jpg';
import img2 from '../banner2.jpg';
import img3 from '../Banner3.jpg';

const banners = [
  { img: img1, heading: 'Unlocking Potential Through Education', text: 'Empower individuals to reach their full potential with quality education. Discover programs designed to foster growth, innovation, and lifelong learning.' },
  { img: img2, heading: 'Nurturing Tomorrow s Leaders Today', text: 'Invest in the future by providing students with the tools and resources they need to become the leaders of tomorrow. Learn more about our leadership and mentorship programs.' },
  { img: img3, heading: 'Transforming Communities Through Learning', text: 'Experience the power of education to transform communities. Our community-based learning projects are designed to uplift and empower local populations through knowledge and skill development' }
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="overlay"></div>
        <div className="text-overlay">
          <h2>{banners[currentIndex].heading}</h2>
          <p>{banners[currentIndex].text}</p>
          <button className="custom-button">
            Donate Now
          </button>
        </div>
        <img src={banners[currentIndex].img} alt={`Banner ${currentIndex + 1}`} />
      </div>
      <button className="carousel-button prev-button" onClick={prevSlide}>❮</button>
      <button className="carousel-button next-button" onClick={nextSlide}>❯</button>
      <div className="dots-container">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
