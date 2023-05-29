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

  const styles = {
    display: 'flex',
    justifyContent: 'flex-start'
  }

  return (
    <div className={s.sales_container} id='sales'>
      <ProductsList
        products={products_to_show}
        title='Sale'
        styles={styles}
        show_filter={false}
        location='sale' />
    </div>
  )
}
