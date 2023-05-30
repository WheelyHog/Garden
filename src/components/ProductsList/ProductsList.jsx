import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import s from './ProductsList.module.css'
import Filter from '../../components/Filter/Filter'

export default function ProductsList({ products, title, styles, show_filter, show_discont_sort, location }) {
  products = products.filter((product) => product.showBySale && product.showByRange)
  console.log(products);

  return (
    <div className={s.products_list_wrapper}>
      <h2 className={s.products_list_title}>{title}</h2>
      {show_filter && <Filter show_discont_sort={show_discont_sort} location={location} />}
      <div className={s.products_list} style={styles}>
        {products.length === 0 ? <p>There is no products in such price interval</p> : products.map(elem => <ProductItem product={elem} key={elem.id} />)}
      </div>
    </div>
  )
}
