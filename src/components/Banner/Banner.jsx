import React from 'react'
import s from './Banner.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import garden from './assets/garden.png'
import { HashLink } from 'react-router-hash-link';
import Button from '../UI/Button/Button';

export default function Banner() {

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const slides = ['slide1', 'slide2', 'slide3']

  return (
    <div className={s.banner_wrapper}>
      <Slider {...settings}>
        {slides.map(elem => {
          return (
            <div className={`${s.slide} ${s[elem]}`} key={elem}>
              <div className={s.banner_sale}>
                <div className={s.content}>
                  <h1 className={s.title}>Sale </h1>
                  <h2 className={s.sub_title}>New season</h2>
                  <HashLink smooth to='#sales'><Button text={'Sale'} properties={'sale_btn'} /></HashLink>
                </div>
                <div className={s.image_box}>
                  <img className={s.image} src={garden} alt='garden' />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>

  )
}
