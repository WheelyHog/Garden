import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductList } from '../../asyncActions/requests';
import ProductsList from '../ProductsList/ProductsList';
import s from './Sale.module.css'

export default function Sale() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAllProductList('sale')), [dispatch])

  const products = useSelector(store => store.productList.productList)
  const products_to_show = [];
  if (products.length !== 0) {
    for (let i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * products.length)
      products_to_show.push(products[randomIndex])
      products.splice(randomIndex, 1)
    }
  }
  return (
    <div className={s.sales_container} id='sales'>
      <h2 className={s.sales_title}>Sale</h2>
      <ProductsList products={products_to_show} />
    </div>
  )
}
