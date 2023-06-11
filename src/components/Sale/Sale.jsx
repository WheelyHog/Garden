import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductList } from '../../asyncActions/requests';
import ProductsList from '../ProductsList/ProductsList';
import s from './Sale.module.css'

export default function Sale() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchAllProductList('sale')), [dispatch])

  let products_to_show = useSelector(store => store.productList.productList).slice(0, 4)

  return (
    <div className={s.sales_container} id='sales'>
      <h2 className={s.sales_title}>Sale</h2>
      <ProductsList products={products_to_show} showPagination={'false'} />
    </div>
  )
}
