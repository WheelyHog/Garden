import React from 'react'
import s from './Banner.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import garden from './assets/garden.png'

export default function Banner() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className={s.banner_wrapper}>
      <Slider {...settings}>
        <div className={s.slide1}>
          <div className={s.banner_sale}>
            <div className={s.content}>
              <h1 className={s.title}>Sale </h1>
              <h2 className={s.sub_title}>New season</h2>
              <button className={s.sale_btn}>Sale</button>
            </div>
            <div className={s.image_box}>
              <img className={s.image} src={garden} />
            </div>
          </div>
        </div>
        <div className={s.slide2}>
          <div className={s.banner_sale}>
            <div className={s.content}>
              <h1 className={s.title}>Sale </h1>
              <h2 className={s.sub_title}>New season</h2>
              <button className={s.sale_btn}>Sale</button>
            </div>
            <div className={s.image_box}>
              <img className={s.image} src={garden} />
            </div>
          </div>
        </div>
        <div className={s.slide3}>
          <div className={s.banner_sale}>
            <div className={s.content}>
              <h1 className={s.title}>Sale </h1>
              <h2 className={s.sub_title}>New season</h2>
              <button className={s.sale_btn}>Sale</button>
            </div>
            <div className={s.image_box}>
              <img className={s.image} src={garden} />
            </div>
          </div>
        </div>
      </Slider>
    </div>

  )
}
