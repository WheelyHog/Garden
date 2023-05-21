import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCategoryProducts } from '../../asyncActions/requests'
import ProductsList from '../../components/ProductsList/ProductsList'
import s from './CategoryProductsPage.module.css'



export default function CategoryProductsPage() {
  const { id } = useParams()

  const dispatch = useDispatch()

  const category_products = useSelector(store => store.category_products)
  const [products, setProducts] = useState([])

  useEffect(() => dispatch(fetchCategoryProducts(id)), [])
  useEffect(() => setProducts(category_products.data), [])

  const styles = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  console.log(category_products);
  const { category, data } = category_products
  console.log(category);
  console.log(data);

  while (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.products_list}>
      <ProductsList products={products} title='' styles={styles} />
    </div>
  )
}
