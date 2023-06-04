import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { addToCartAction } from '../../store/reducers/cartReducer'
import s from './ProductInfoPage.module.css'

export default function ProductInfoPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])
  const base_url = "http://localhost:3333";

  useEffect(() => {
    window.scrollTo(0, 0);
    const product_url = base_url + '/products/';
    fetch(`${product_url}${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  const productItem = product ? Object.assign({}, ...product) : {}
  const { title, image, discont_price, price, description } = productItem
  const discount_value = Math.floor(100 - discont_price * 100 / price);

  return (
    <div className={s.product_info}>
      <h2 className={s.product_title}>{title}</h2>
      <div className={s.product_details}>
        <div className={s.img_wrapper}>
          <img className={s.product_img} src={`${base_url}${image}`} alt={title} />
        </div>
        <div className={s.product_description}>
          <div className={s.price_container}>
            <p className={s.discount_price}>{discont_price !== null ? discont_price : price}<span>$</span></p>
            {discont_price && <p className={s.price}>{price}$</p>}
            {discont_price && <p className={s.discount_value}>{-discount_value}%</p>}
          </div>
          <Button text={'To cart'} properties={'add_to_cart_btn'} onClick={() => dispatch(addToCartAction(product[0]))} />
          <h4 className={s.product_subtitle}>Description</h4>
          <p className={s.product_text}>{description}</p>
        </div>
      </div>
    </div >
  )
}