import React from 'react'
import Banner from '../../components/Banner/Banner'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import s from './HomePage.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesList, fetchProductsList } from '../../asyncActions/requests';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';

export default function HomePage() {
  const dispatch = useDispatch()
  const categories = useSelector(store => store.categories)
  const products = useSelector(store => store.products)

  useEffect(() => {
    dispatch(fetchCategoriesList())
    dispatch(fetchProductsList())
    window.scrollTo(0, 0);
  }, [])


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
