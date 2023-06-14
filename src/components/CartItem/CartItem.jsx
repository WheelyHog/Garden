import React from 'react'
import { useDispatch } from 'react-redux';
import s from './CartItem.module.css'
import { RxCross1 } from 'react-icons/rx'
import { decrement_count, increment_count, remove_from_cart } from '../../store/reducers/cartSlice';
import { base_url } from '../../asyncActions/requests';

export default function CartItem({ id, title, image, count, discont_price, price }) {
  const dispatch = useDispatch();

  return (
    <div className={s.cart_item}>
      <img src={`${base_url}${image}`} alt={title} className={s.cart_img} />
      <div className={s.counter_wrapper}>
        <p className={s.cart_item_title}>{title}</p>
        <div className={s.counter_box}>
          <button onClick={() => dispatch(decrement_count(id))}>-</button>
          <p className={s.cart_item_counter}>{count}</p>
          <button onClick={() => dispatch(increment_count(id))}>+</button>
        </div>
      </div>
      <h2 className={s.discount_price}>{discont_price ? discont_price : price}$</h2>
      {discont_price && <h3 className={s.price}>{price}$</h3>}
      <RxCross1 className={s.close_btn} onClick={() => dispatch(remove_from_cart(id))} />
    </div>
  )
}
