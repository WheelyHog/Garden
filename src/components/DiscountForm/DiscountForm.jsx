import React from 'react';
import s from './DiscountForm.module.css'
import dwarf from './assets/gnom.png'
import { send_coupon_request } from '../../asyncActions/requests';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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
          <Input type={'tel'}
            placeholder={'+49'}
            name={'phone'}
            pattern={'[+]{1}[0-9]{11}'}
            properties={'discount_input'}
            required
          />
          <Button text={'Get a discount'} properties={'discount_btn'} />
        </form>
      </div>
    </div>
  )
}
