import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { send_order } from '../../asyncActions/order'
import { clear_cart } from '../../store/reducers/cartSlice'
import PopupWindow from '../PopupWindow/PopupWindow'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import s from './OrderDetails.module.css'

export default function OrderDetails() {
  const [messageActive, setMessageActive] = useState(false)
  const cart = useSelector(store => store.cart)
  const total_sum = cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0)
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault()
    send_order(e.target.phone.value)
    setMessageActive(true)
    document.body.style.overflow = 'hidden';
    e.target.reset()
    dispatch(clear_cart())
  }

  return (
    <div className={s.order}>
      <h2 className={s.order_title}>Order details</h2>
      <div className={s.order_sum}>
        <p className={s.order_text}>Total</p>
        <p className={s.order_amount}>{total_sum}<span> $</span></p>
      </div>
      <form onSubmit={submit}>
        <Input type={'tel'}
          placeholder={'Phone number'}
          properties={'phone_input'}
          name={'phone'}
          pattern={'[+]{1}[0-9]{11}'}
          required
        />
        <Button text={'Order'} properties={'order_btn'} disabled={cart.length === 0 ? true : false} />
      </form>
      <PopupWindow
        messageActive={messageActive}
        setMessageActive={setMessageActive}
        h3_text={'Thank you!'}
        h4_text={'Wait for order details in SMS!'}
      />
    </div>
  )
}
