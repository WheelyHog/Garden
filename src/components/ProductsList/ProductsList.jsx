import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'

export default function ProductsList({ products, title, styles }) {
  console.log(products);
  return (
    <div className={s.products_list_wrapper}>
      <h2 className={s.products_list_title}>{title}</h2>
      <div className={s.products_list} style={styles}>
        {products.map(elem => <ProductItem {...elem} key={elem.id} />)}
      </div>
    </div>
  )
}