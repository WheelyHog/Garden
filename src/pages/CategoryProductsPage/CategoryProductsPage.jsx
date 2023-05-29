import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCategoryProducts } from '../../asyncActions/requests'
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './CategoryProductsPage.module.css'




export default function CategoryProductsPage() {

  const { id } = useParams()
  const dispatch = useDispatch()
  const category_products = useSelector(store => store.category_products)
  useEffect(() => {
    dispatch(fetchCategoryProducts(id))
    window.scrollTo(0, 0);
  }, [])

  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const title = category_products.data ? category_products.category.title : ''
  const data = category_products.data ? category_products.data : []

  return (
    <div className={s.products_list}>
      {<ProductsList
        products={data}
        title={title}
        styles={styles}
        show_filter={true}
        show_discont_sort={true}
        location='category_products' />}
    </div>
  )
}
