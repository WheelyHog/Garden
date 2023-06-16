import React from 'react'
import { useSelector } from 'react-redux';
import s from './CartList.module.css'
import CartItem from '../CartItem/CartItem'

export default function CartList() {

  const cart = useSelector(store => store.cart)
  return (
    <div className={s.cart_list}>
      {cart.map(elem => <CartItem key={elem.id} {...elem} />)}
    </div>
  )
}
