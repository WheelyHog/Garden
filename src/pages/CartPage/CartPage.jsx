import React, { useEffect, useState } from 'react'
import s from './CartPage.module.css'
import CartList from '../../components/CartList/CartList'
import { useDispatch, useSelector } from 'react-redux'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import { SlArrowRight } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import { send_order } from '../../store/asyncActions/order'
import { clear_cart } from '../../store/reducers/cartSlice'

export default function CartPage() {
  useEffect(() => window.scrollTo(0, 0), [])
  const cart = useSelector(store => store.cart)

  const dispatch = useDispatch();

  const [messageActive, setMessageActive] = useState(false)

  const onSubmit = (values) => {
    send_order(values.order)
    setMessageActive(true)
    document.body.style.overflow = 'hidden';
    dispatch(clear_cart())
  }

  return (
    <main>
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
            <OrderDetails onSubmit={onSubmit} messageActive={messageActive} setMessageActive={setMessageActive} />
          </div>
        </div>
      </div>
    </main>

  )
}
