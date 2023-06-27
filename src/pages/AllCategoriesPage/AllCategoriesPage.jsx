import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { fetchCategoriesList } from '../../store/asyncActions/categories'


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
