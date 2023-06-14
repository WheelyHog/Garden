import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList } from '../../asyncActions/categories'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import s from './AllCategoriesPage.module.css'

export default function AllCategoriesPage() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesList())
    window.scrollTo(0, 0);
  }, [])

  const categories = useSelector(store => store.categories)

  return (
    <div>
      <CategoriesList categories={categories} show_btn={false} title='Categories' />
    </div>
  )
}
