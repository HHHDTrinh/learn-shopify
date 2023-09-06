'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderTop = () => {
  const texts = [
    'Get free shipping on all orders over $150.',
    'Bundle + save when you shop Kits.',
    'Subscribe to save 15% off + get free shipping on all orders.',
    'Shop Now: JOY RIDE Sport Sunglasses',
  ];

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className='absolute right-[0.5rem] top-0 lg:right-[1rem]'
      >
        <span className='text-[24px]'>&gt;</span>
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className='absolute left-[0.5rem] top-0 lg:left-[1rem]'
      >
        <span className='text-[24px]'>&lt;</span>
      </button>
    );
  }

  return (
    <Slider
      slidesToShow={1}
      slidesToScroll={1}
      speed={1000}
      infinite={true}
      adaptiveHeight
      autoplay={true}
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
      className='section-x-padding border-b-grid border-grid-color text-secondary-text relative flex h-[40.4px] items-center justify-center bg-black py-2'
    >
      {texts.map((txt, idx) => (
        <p key={idx} className='text-center text-white'>
          {txt}
        </p>
      ))}
    </Slider>
  );
};

export default SliderTop;
