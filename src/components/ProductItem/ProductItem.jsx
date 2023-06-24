import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { base_url } from '../../asyncActions/base_url';
import { add_to_cart } from '../../store/reducers/cartSlice';
import Button from '../UI/Button/Button';
import s from './ProductItem.module.css'


export default function ProductItem({ product }) {
  const { id, image, price, title, discont_price } = product
  const dispatch = useDispatch();
  const discount_value = Math.floor(100 - discont_price * 100 / price);

  const addToCartHandler = (e) => {
    e.preventDefault();
    dispatch(add_to_cart(product))
  }

  return (
    <NavLink to={`/products/${id}`} onClick={(e) => e.stopPropagation()}>
      <div className={s.product_item}>
        <div className={s.product_image_wrapper}>
          <img className={s.product_image} src={`${base_url}${image}`} alt={title} />
          <Button text={'Add To Cart'} properties={'add_btn'} onClick={addToCartHandler} />
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
