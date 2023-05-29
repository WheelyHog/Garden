import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsList } from '../../asyncActions/requests'
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './SalesProductsPage.module.css'

export default function SalesProductsPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductsList())
    window.scrollTo(0, 0);
  }, [])
  const products = useSelector(store => store.products)

  const products_to_show = products.filter(product => product.discont_price !== null)

  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <div className={s.products_list}>
      <ProductsList
        products={products_to_show}
        title='Products with sale'
        styles={styles}
        show_filter={true}
        show_discont_sort={false}
        location='all_sales' />
    </div>
  )
}
