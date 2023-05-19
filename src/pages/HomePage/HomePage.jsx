import React from 'react'
import Banner from '../../components/Banner/Banner'
import CategoriesList from '../../components/CategotiesList/CategoriesList'
import s from './HomePage.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList, fetchProductsList } from '../../asyncActions/requests';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';

export default function HomePage() {
  const dispatch = useDispatch()
  const products = useSelector(store => store.products)
  const categories = useSelector(store => store.categories)

  useEffect(() => { dispatch(fetchProductsList()) }, [])
  useEffect(() => { dispatch(fetchCategoriesList()) }, [])

  const categories_to_show = categories.slice(0, 4)

  return (
    <div>
      <Banner />
      <CategoriesList categories={categories_to_show} show_btn={true} title='Catalog' />
      <DiscountForm />
      <Sale />
    </div>
  )
}
