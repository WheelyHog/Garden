import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DiscountForm from '../../components/DiscountForm/DiscountForm';
import Sale from '../../components/Sale/Sale';
import { fetchCategoriesList } from '../../store/asyncActions/categories';
import { fetchAllProductList } from '../../store/asyncActions/products';
import { send_coupon_request } from '../../store/asyncActions/order';

export default function HomePage() {

  const [messageActive, setMessageActive] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesList())
    dispatch(fetchAllProductList())
    window.scrollTo(0, 0);
  }, [dispatch])

  const categories = useSelector(store => store.categories)
  const categories_to_show = categories.slice(0, 4)

  const onSubmit = (values) => {
    send_coupon_request(values.phone)
    setMessageActive(true)
    document.body.style.overflow = 'hidden';
  }

  return (
    <main>
      <Banner />
      <CategoriesList categories={categories_to_show} show_btn={true} title='Catalog' />
      <DiscountForm onSubmit={onSubmit} messageActive={messageActive} setMessageActive={setMessageActive} />
      <Sale />
    </main>
  )
}
