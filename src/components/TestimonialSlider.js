import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialCard from './Testimonial';

export default class TestimonialSlider extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplaySpeed: 4000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    }

    return(
      <div className="TestimonialSlider">
        <Slider {...settings}>
          { this.props.testimonials.map(item => {
            return(
              <TestimonialCard item={item} key={item.id}/>
            )
          })}
        </Slider>
      </div>
    )
  }
}
