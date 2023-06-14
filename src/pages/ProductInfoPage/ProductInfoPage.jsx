import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import s from './ProductInfoPage.module.css'
import { add_to_cart } from '../../store/reducers/cartSlice'
import { fetchProductInfo } from '../../asyncActions/products'
import { base_url } from '../../asyncActions/base_url'



export default function ProductInfoPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productItem = useSelector(store => store.productInfo)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProductInfo(id))
    window.scrollTo(0, 0)
  }, [dispatch, id])

  if (productItem.status) {
    navigate('/*')
  }

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
          <Button text={'To cart'} properties={'add_to_cart_btn'} onClick={() => dispatch(add_to_cart(productItem))} />
          <h4 className={s.product_subtitle}>Description</h4>
          <p className={s.product_text}>{description}</p>
        </div>
      </div>
    </div >
  )
}
