import React, { useEffect } from 'react'
import s from './CartPage.module.css'
import CartList from '../../components/CartList/CartList'
import { useSelector } from 'react-redux'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import { SlArrowRight } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

export default function CartPage() {
  useEffect(() => window.scrollTo(0, 0), [])
  const cart = useSelector(store => store.cart)
  console.log(cart);

  return (
    <div className='container'>
      <div className={s.cart_list_wrapper}>
        <h2 className={s.title}>Shopping cart</h2>
        <NavLink to='/products/all'>
          <div className={s.back_link_wrapper}>
            <p className={s.back_link}>Back to the store</p>
            <SlArrowRight className={s.arrow} />
          </div>
        </NavLink>
        <div className={s.cart_list_container}>
          {cart.length !== 0 ? <CartList /> : <p className={s.warning}>Your Cart Is Empty!</p>}
          <OrderDetails />
        </div>
      </div>
    </div>
  )
}
