import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementCountAction, incrementCountAction } from '../../store/reducers/cartReducer';
import s from './CartItem.module.css'

export default function CartItem({ id, title, image, count, discont_price, price }) {
  const base_url = 'http://localhost:3333';
  const dispatch = useDispatch();

  return (
    <div className={s.cart_item}>
      <img src={`${base_url}${image}`} alt={title} className={s.cart_img} />
      <div className={s.counter_wrapper}>
        <p className={s.cart_item_title}>{title}</p>
        <div className={s.counter_box}>
          <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
          <p className={s.cart_item_counter}>{count}</p>
          <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
        </div>
      </div>
      <h2 className={s.discount_price}>{discont_price ? discont_price : price}$</h2>
      {discont_price && <h3 className={s.price}>{price}$</h3>}
    </div>
  )
}
