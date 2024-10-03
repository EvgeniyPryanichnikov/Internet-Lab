import s from './Slider.module.scss'
import React, { useState } from 'react'

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
        <section className={s.slider}>
          <h2>
            Отзывы
          </h2>

          <div className={s.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map(slide => (
              <div className={s.slide} key={slide.id}>
                {slide.image}
                <p>{slide.text}</p>
              </div>
            ))}
          </div>

          <button className={s.prev} onClick={prevSlide}>❮</button>

          <button className={s.next} onClick={nextSlide}>❯</button>

          <div className={s.pagination}>
            {slides.map((slide, index) => (
              <span
                  key={index}
                  className={`dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </section>
    );
};

export default Slider;