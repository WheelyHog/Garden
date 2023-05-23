import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsList } from '../../asyncActions/requests';
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './ProductsPage.module.css'

export default function ProductsPage() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(fetchProductsList()) }, [])

  const products = useSelector(store => store.products)



  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <div className={s.products_list}>
      <ProductsList products={products} title='All products' styles={styles} />
    </div>
  )
}
