import React from 'react';
import s from './DiscountForm.module.css'
import dwarf from './assets/gnom.png'
import { send_coupon_request } from '../../asyncActions/requests';

const submit = (e) => {
  e.preventDefault()
  send_coupon_request(e.target.phone.value)
  e.target.reset()
}

export default function DiscountForm() {
  return (
    <div className={s.discount_wrapper}>
      <div className={s.discount_left}>
        <img src={dwarf} alt='dwarf' className={s.discount_img} />
      </div>
      <div className={s.discount_right}>
        <p className={s.discount_title}>5% off </p>
        <p className={s.discount_subtitle}>on the first order</p>
        <form onSubmit={submit}>
          <input type='tel' placeholder="+49" className={s.discount_input} name='phone' required />
          <button className={s.discount_btn}>Get a discount</button>
        </form>
      </div>
    </div>
  )
}
