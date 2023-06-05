import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'

export default function ProductsList({ products }) {

  return (
    <div className={s.products_list_wrapper}>
      <div className={s.products_list}>
        {products.length === 0 ? <p className={s.warning}>There is no products in such price interval!</p> : products.map(elem => <ProductItem product={elem} key={elem.id} />)}
      </div>
    </div>
  )
}
