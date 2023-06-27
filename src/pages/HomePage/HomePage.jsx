import React from 'react'
import Banner from '../../components/Banner/Banner'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';
import { fetchCategoriesList } from '../../store/asyncActions/categories';
import { fetchAllProductList } from '../../store/asyncActions/products';

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesList())
    dispatch(fetchAllProductList())
    window.scrollTo(0, 0);
  }, [dispatch])

  const categories = useSelector(store => store.categories)
  const categories_to_show = categories.slice(0, 4)

  return (
    <main>
      <Banner />
      <CategoriesList categories={categories_to_show} show_btn={true} title='Catalog' />
      <DiscountForm />
      <Sale />
    </main>
  )
}
