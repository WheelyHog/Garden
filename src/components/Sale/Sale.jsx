import React from 'react'
import { useSelector } from 'react-redux'
import ProductsList from '../ProductsList/ProductsList';
import s from './Sale.module.css'

export default function Sale() {
  const products = useSelector(store => store.products)
  const products_to_show = [];

  if (products.length !== 0) {
    const discountProducts = products.filter(product => product.discont_price !== null)

    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * discountProducts.length)
      products_to_show.push(discountProducts[randomIndex])
      discountProducts.splice(randomIndex, 1)
    }
  }

  return (
    <div className={s.sales_container}>
      <ProductsList products={products_to_show} title='Sale' />
    </div>
  )
}
