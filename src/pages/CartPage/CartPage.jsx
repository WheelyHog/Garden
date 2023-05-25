import React from 'react'
import s from './CartPage.module.css'
import CartList from '../../components/CartList/CartList'
import { useSelector } from 'react-redux'

export default function CartPage() {
  const cart = useSelector(store => store.cart)

  return (
    <div className={s.cart_list_wrapper}>
      <h2 className={s.title}>Shopping cart</h2>
      {cart.length !== 0 ? <CartList /> : <p className={s.warning}>Your Cart Is Empty!</p>}
    </div>
  )
}
