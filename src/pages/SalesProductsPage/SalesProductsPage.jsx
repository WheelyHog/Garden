import React from 'react'
import { useSelector } from 'react-redux'
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './SalesProductsPage.module.css'

export default function SalesProductsPage() {

  const products = useSelector(store => store.products)
  const products_to_show = products.filter(product => product.discont_price !== null)

  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <div>
      <ProductsList products={products_to_show} title='Products with sale' styles={styles} />
    </div>
  )
}
