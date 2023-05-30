import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cartReducer';
import s from './ProductItem.module.css'

export default function ProductItem({ product }) {
  const { id, image, price, title, discont_price } = product
  const dispatch = useDispatch();
  const baseUrl = "http://localhost:3333";
  const discount_value = Math.floor(100 - discont_price * 100 / price);

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(product))
  }

  return (
    <NavLink to={`/products/${id}`}>
      <div className={s.product_item}>
        <div className={s.product_image_wrapper}>
          <img className={s.product_image} src={`${baseUrl}${image}`} alt={title} />
          <button className={s.add_btn} onClick={addToCartHandler}>Add To Cart</button>
        </div>
        <div className={s.product_price_container}>
          <p className={s.discount_price}>{discont_price !== null ? discont_price : price}$</p>
          {discont_price && <p className={s.price}>{price}$</p>}
          {discont_price && <p className={s.discount_value}>{-discount_value}%</p>}
        </div>
        <p className={s.product_title}>{title}</p>
      </div>
    </NavLink>
  )
}
