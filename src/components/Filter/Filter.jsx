import React from 'react'
import { useDispatch } from 'react-redux';
import { filterCategoryProductsBySaleAction, sortCategoryProductsByDefaultAction, sortCAtegoryProductsByNameAction, sortCategoryProductsByPriceAscAction, sortCategoryProductsByPriceDescAction } from '../../store/reducers/categoryProductsReducer';
import { filterBySaleAction, sortByDefaultAction, sortByNameAction, sortByPriceAscAction, sortByPriceDescAction } from '../../store/reducers/productsReducer';
import s from './Filter.module.css'

export default function Filter({ show_discont_sort, location }) {
  const dispatch = useDispatch()
  const handlerDiscount = (e) => {
    dispatch(location === 'category_products' ? filterCategoryProductsBySaleAction(e.target.checked) : filterBySaleAction(e.target.checked))
  }

  const handleSortOption = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case 'default':
        dispatch(location === 'category_products' ? sortCategoryProductsByDefaultAction() : sortByDefaultAction())
        break;

      case 'priceDesc':
        dispatch(location === 'category_products' ? sortCategoryProductsByPriceDescAction() : sortByPriceDescAction())
        break

      case 'priceAsc':
        dispatch(location === 'category_products' ? sortCategoryProductsByPriceAscAction() : sortByPriceAscAction())
        break

      case 'name':
        dispatch(location === 'category_products' ? sortCAtegoryProductsByNameAction() : sortByNameAction())
        break

      default:
        break;
    }
  }


  return (
    <div className={s.filter_container}>
      <div className={s.filter_price}>
        <label className={s.filter_price_title}>Price</label>
        <input type="text" placeholder="from" name="from" />
        <input type="text" placeholder="to" name="to" />
      </div>
      {show_discont_sort && <div className={s.filter_discount}>
        <label className={s.filter_discount_title}>Discounted items
          <input type='checkbox' name='check_discount' onClick={handlerDiscount} />
          <span className={s.checkmark}></span>
        </label>
      </div>}
      <div className={s.filter_sort}>
        <label className={s.filter_sort_title}>Sorted</label>
        <select name='sort_by' onInput={handleSortOption}>
          <option value='default'>by default</option>
          <option value='priceDesc'>price descending</option>
          <option value='priceAsc'>price ascending</option>
          <option value='name'>by name</option>
        </select>
      </div>
    </div>
  )
}
