import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../asyncActions/requests';
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './ProductsPage.module.css'

export default function ProductsPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductsList())
    window.scrollTo(0, 0);
  }, [])

  const products = useSelector(store => store.products)

  return (
    <div className={s.products_list}>
      <ProductsList
        products={products}
        title='All products'
        show_filter={true}
        show_discont_sort={true}
        location='all_products' />
    </div>
  )
}
