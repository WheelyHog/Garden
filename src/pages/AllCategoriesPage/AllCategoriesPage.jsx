import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList } from '../../asyncActions/requests'
import CategoriesList from '../../components/CategotiesList/CategoriesList'
import s from './AllCategoriesPage.module.css'

export default function AllCategoriesPage() {

  const dispatch = useDispatch()
  useEffect(() => { dispatch(fetchCategoriesList()) }, [])

  const categories = useSelector(store => store.categories)

  return (
    <div>
      <CategoriesList categories={categories} show_btn={false} title='Categories' />
    </div>
  )
}
