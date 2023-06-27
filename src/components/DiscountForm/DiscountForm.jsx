import React, { useState } from 'react';
import s from './DiscountForm.module.css'
import dwarf from './assets/gnom.png'
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import PopupWindow from '../PopupWindow/PopupWindow';
import { send_coupon_request } from '../../store/asyncActions/order';



export default function DiscountForm() {

  const submit = (e) => {
    e.preventDefault()
    send_coupon_request(e.target.phone.value)
    setMessageActive(true)
    document.body.style.overflow = 'hidden';
    e.target.reset()
  }

  const [messageActive, setMessageActive] = useState(false)

  return (
    <section className={s.discount_wrapper}>
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
      <PopupWindow
        messageActive={messageActive}
        setMessageActive={setMessageActive}
        h3_text={'Congratulations!'}
        h4_text={'Now you have discount 5% on the first order!'}
      />
    </section>
  )
}
