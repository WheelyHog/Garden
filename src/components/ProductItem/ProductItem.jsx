import React from 'react'
import s from './ProductItem.module.css'

export default function ProductItem({ id, image, price, title, discont_price }) {
  const baseUrl = "http://localhost:3333";
  return (
    <div className={s.product_item}>
      <div className={s.product_image_wrapper}>
        <img className={s.product_image} src={`${baseUrl}${image}`} />
      </div>
      <div className={s.product_price_container}>
        <p className={s.discount_price}>{discont_price}$</p>
        <p className={s.price}>{price}$</p>
        <p className={s.discount_value}> %</p>
      </div>
      <p className={s.product_title}>{title}</p>
    </div>
  )
}
