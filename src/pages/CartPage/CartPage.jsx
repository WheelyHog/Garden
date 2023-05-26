import React from 'react'
import s from './CartPage.module.css'
import CartList from '../../components/CartList/CartList'
import { useSelector } from 'react-redux'
import OrderDetails from '../../components/OrderDetails/OrderDetails'

export default function CartPage() {
  const cart = useSelector(store => store.cart)

  return (
    <div className={s.cart_list_wrapper}>
      <h2 className={s.title}>Shopping cart</h2>
      <div className={s.cart_list_container}>
        {cart.length !== 0 ? <CartList /> : <p className={s.warning}>Your Cart Is Empty!</p>}
        <OrderDetails />
      </div>

    </div>
  )
}
