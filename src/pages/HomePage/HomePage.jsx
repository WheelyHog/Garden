import React from 'react'
import Banner from '../../components/Banner/Banner'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import s from './HomePage.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductList, fetchCategoriesList } from '../../asyncActions/requests';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesList())
    dispatch(fetchAllProductList())
    window.scrollTo(0, 0);
  }, [])

  const categories = useSelector(store => store.categories)
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
