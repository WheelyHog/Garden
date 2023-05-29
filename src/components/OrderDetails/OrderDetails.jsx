import React from 'react'
import { useSelector } from 'react-redux'
import { send_order } from '../../asyncActions/requests'
import s from './OrderDetails.module.css'

export default function OrderDetails() {

  const cart = useSelector(store => store.cart)
  const total_sum = cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0)

  const submit = (e) => {
    e.preventDefault()
    // console.log(e.target.phone.value)
    send_order(e.target.phone.value)
    e.target.reset()
  }

  return (
    <div className={s.order}>
      <h2 className={s.order_title}>Order details</h2>
      <div className={s.order_sum}>
        <p className={s.order_text}>Total</p>
        <p className={s.order_amount}>{total_sum}<span> $</span></p>
      </div>
      <form onSubmit={submit}>
        <input type='tel' placeholder='Phone number' className={s.phone_input} name='phone' required />
        <button className={s.order_btn}>Order</button>
      </form>
    </div>
  )
}
