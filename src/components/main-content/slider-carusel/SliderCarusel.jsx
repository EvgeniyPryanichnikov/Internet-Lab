import Slider from "react-slick"
import "./Slider.css"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useWindowDimensions  from '../../../hooks/WindowDimensions'

const SimpleSlider = ({slides}) => {
  const { width } = useWindowDimensions()
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : (width >= 768 && width < 1280) ? 2 : 3,
    slidesToScroll: 1,
    arrows: window.innerWidth > 1279,
  
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="slider-block">
      <h2 className="title">
        Отзывы
      </h2>

      <div className="slider">
        <Slider {...settings}>
            {slides.map(slide => (
              <div className="slide" key={slide.id}>
                <div className="top">
                  {slide.image}

                  <div className="personal-info">
                    <p className="name">{slide.name}</p>

                    <p className="city">{slide.city}</p>
                  </div>
                </div>

                <p className="text">
                  {slide.text}
                </p>
              </div>
            ))}
        </Slider>
      </div>
    </section>
    
  )
}

export default SimpleSlider;