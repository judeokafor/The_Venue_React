import React from 'react';
import Slider from 'react-slick';
import Slide1 from '../../resources/images/slide_one.jpg';
import Slide2 from '../../resources/images/slide_two.jpg';
import Slide3 from '../../resources/images/slide_three.jpg';

const Carousel = () => {
   const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000
   };
   return (
      <div
         className="carrousel_wrapper"
         style={{
            backgroundColor: 'purple',
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
         }}
      >
         <Slider {...settings}>
            <div>
               <div
                  className="carrousel_image"
                  style={{
                     background: `url(${Slide1})`,
                     height: `${window.innerHeight}px`
                  }}
               />
            </div>
            <div>
               <div
                  className="carrousel_image"
                  style={{
                     background: `url(${Slide2})`,
                     height: `${window.innerHeight}px`
                  }}
               />
            </div>
            <div>
               <div
                  className="carrousel_image"
                  style={{
                     background: `url(${Slide3})`,
                     height: `${window.innerHeight}px`
                  }}
               />
            </div>
         </Slider>
      </div>
   );
};
export default Carousel;
