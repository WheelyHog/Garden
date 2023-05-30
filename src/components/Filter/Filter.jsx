import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterCategoryProductsByRangeAction, filterCategoryProductsBySaleAction, sortCategoryProductsByDefaultAction, sortCategoryProductsByNameAction, sortCategoryProductsByPriceAscAction, sortCategoryProductsByPriceDescAction } from '../../store/reducers/categoryProductsReducer';
import { filterByRangeAction, filterBySaleAction, sortByDefaultAction, sortByNameAction, sortByPriceAscAction, sortByPriceDescAction } from '../../store/reducers/productsReducer';
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
        dispatch(location === 'category_products' ? sortCategoryProductsByNameAction() : sortByNameAction())
        break

      default:
        break;
    }
  }

  const [fromValue, setFromValue] = useState('from');
  const [toValue, setToValue] = useState('to');

  const handleChange = (e) => {
    const range = {
      from: fromValue,
      to: toValue
    }
    const { value } = e.target;
    if (e.target.name === 'from') {
      range.from = value
      setFromValue(Number(value))
    } else {
      range.to = value
      setToValue(Number(value))
    }

    dispatch(location === 'category_products' ? filterCategoryProductsByRangeAction(range) : filterByRangeAction(range))
  }

  return (
    <div className={s.filter_container}>
      <div className={s.filter_price}>
        <label className={s.filter_price_title}>Price</label>
        <input type="number" placeholder="from" name="from" min='0' onChange={handleChange} value={fromValue} />
        <input type="number" placeholder="to" name="to" mon='0' onChange={handleChange} value={toValue} />
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
