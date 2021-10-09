import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../assets/slides/slide1.png';
import slide2 from '../../assets/slides/slide2.png';
import slide3 from '../../assets/slides/slide3.png';

import './slider.css';

const DEFAULT_CLASSNAME = 'slider';

const SlideText = ({textHeader, discount}) => (
    <div className={`${DEFAULT_CLASSNAME}_slide-text`}>
      <div className={`${DEFAULT_CLASSNAME}_slide-text-title`}>{textHeader}</div>
      <div className={`${DEFAULT_CLASSNAME}_slide-text-discount-title`}>
        {'Сэкономь до'}
        <br /> <span>{discount}</span>
      </div>

      <div className={`${DEFAULT_CLASSNAME}_slide-btn`}>
        {'Перейти в Каталог'}
      </div>
    </div>
);

const Slider = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <Carousel
        showStatus={false}
        swipeable={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={7000}
        showIndicators={false}
      >
        <div className={`${DEFAULT_CLASSNAME}_slide`}>
          <div className={`${DEFAULT_CLASSNAME}_slide-image-wrapper`}>
            <img src={slide1} alt={'slide-image'} />
          </div>
          <SlideText textHeader={'Скидки в честь открытия'} discount={'15%'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_slide`}>
          <div className={`${DEFAULT_CLASSNAME}_slide-image-wrapper`}>
            <img src={slide2} alt={'slide-image'} />
          </div>
          <SlideText textHeader={'Бери больше, плати меньше'} discount={'50%'} />
        </div>
        <div className={`${DEFAULT_CLASSNAME}_slide`}>
          <div className={`${DEFAULT_CLASSNAME}_slide-image-wrapper`}>
            <img src={slide3} alt={'slide-image'} />
          </div>
          <SlideText textHeader={'Найди промокод в инсте'} discount={'20%'} />
        </div>
      </Carousel>
    </div>
  )
};

export default Slider;