import React from 'react';
import s from './DiscountForm.module.css'
import gnom from './assets/gnom.png'

export default function DiscountForm() {
  return (
    <div className={s.discount_wrapper}>
      <div className={s.discount_left}>
        <img src={gnom} alt='gnom' className={s.discount_img} />
      </div>
      <div className={s.discount_right}>
        <p className={s.discount_title}>5% off </p>
        <p className={s.discount_subtitle}>on the first order</p>
        <form>
          <input placeholder="+49" className={s.discount_input} />
          <button className={s.discount_btn}>Get a discount</button>
        </form>
      </div>
    </div>
  )
}
