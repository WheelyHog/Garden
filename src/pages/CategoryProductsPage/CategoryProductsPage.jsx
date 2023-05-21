import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCategoryProducts } from '../../asyncActions/requests'
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './CategoryProductsPage.module.css'



export default function CategoryProductsPage() {

  console.log('CategoryProductsPage');
  const { id } = useParams()

  const dispatch = useDispatch()

  const category_products = useSelector(store => store.category_products)
  // const [products, setProducts] = useState([])

  useEffect(() => dispatch(fetchCategoryProducts(id)), [])
  // useEffect(() => category_products.data ?? setProducts(category_products.data), [])

  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  // console.log(category_products);
  // console.log(category_products.data);
  // const { category, data } = category_products
  // console.log(category);
  // console.log(data);

  // while (!products) {
  //   return <p>Loading...</p>;
  // }

  const title = category_products.data ? category_products.category.title : ''
  const data = category_products.data ? category_products.data : []

  return (
    <div className={s.products_list}>

      <ProductsList products={data} title={title} styles={styles} />
    </div>
  )
}
