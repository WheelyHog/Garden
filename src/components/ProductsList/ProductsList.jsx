import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'

export default function ProductsList({ products, showPagination }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [countProductsPage, setCountProductsPage] = useState(8)

  const lastElem = currentPage * countProductsPage;
  const firstElem = lastElem - countProductsPage;
  const productsPageList = products.slice(firstElem, lastElem)
  const countElem = Math.ceil(products.length / countProductsPage)

  useEffect(() => {
    if (Math.ceil(products.length / countProductsPage) < currentPage) {
      setCurrentPage(1)
    }
    window.scrollTo(0, 0);
  }, [products, currentPage])

  return (
    <div className={s.products_list_wrapper}>
      <div className={s.products_list}>
        {products.length === 0
          ? <p className={s.warning}>There is no products in this criteria!</p>
          : productsPageList.map((elem, index) => <ProductItem product={elem} key={index} />)
        }
      </div>
      {!showPagination && <Pagination setCurrentPage={setCurrentPage} countElem={countElem} currentPage={currentPage} />}
    </div>
  )
}
