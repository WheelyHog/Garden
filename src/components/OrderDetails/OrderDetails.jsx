import React from 'react'
import { useSelector } from 'react-redux'
import s from './OrderDetails.module.css'

export default function OrderDetails() {

  const cart = useSelector(store => store.cart)
  const total_sum = cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0)

  return (
    <div className={s.order}>
      <h2 className={s.order_title}>Order details</h2>
      <div className={s.order_sum}>
        <p className={s.order_text}>Total</p>
        <p className={s.order_amount}>{total_sum}<span> $</span></p>
      </div>
      <input type='tel' placeholder='Phone number' className={s.phone_input} />
      <button className={s.order_btn}>Order</button>
    </div>
  )
}
