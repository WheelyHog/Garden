import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterByRangeAction, filterBySaleAction, sortByDefaultAction, sortByNameAction, sortByNameAZAction, sortByNameZAAction, sortByPriceAscAction, sortByPriceDescAction } from '../../store/reducers/productsReducer';
import Input from '../UI/Input/Input';
import s from './Filter.module.css'

export default function Filter({ type }) {

  const dispatch = useDispatch()
  const handlerDiscount = (e) => {
    dispatch(filterBySaleAction(e.target.checked))
  }

  const handleSortOption = (e) => {
    e.preventDefault();

    switch (e.target.value) {

      case 'default':
        dispatch(sortByDefaultAction())
        break;

      case 'priceDesc':
        dispatch(sortByPriceDescAction())
        break

      case 'priceAsc':
        dispatch(sortByPriceAscAction())
        break

      case 'name_az':
        dispatch(sortByNameAZAction())
        break

      case 'name_za':
        dispatch(sortByNameZAAction())
        break

      default:
        break;
    }
  }

  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleChange = (e) => {
    const range = {
      from: fromValue,
      to: toValue
    }
    const { value } = e.target;
    if (e.target.name === 'from') {
      range.from = +value
      setFromValue(value)
    } else {
      range.to = +value
      setToValue(value)
    }
    dispatch(filterByRangeAction(range))
  }

  return (
    <div className={s.filter_container}>
      <div className={s.filter_price}>
        <label className={s.filter_price_title}>Price</label>
        <Input type={'number'}
          placeholder={'from'}
          name={'from'}
          min={'0'}
          value={fromValue} onChange={handleChange} />
        <Input type={'number'}
          placeholder={'to'}
          name={'to'}
          min={'0'}
          value={toValue}
          onChange={handleChange}
        />
      </div>
      {type !== 'sale' && <div className={s.filter_discount}>
        <label className={s.filter_discount_title}>Discounted items
          <Input
            type={'checkbox'}
            name={'check_discount'}
            onClick={handlerDiscount}
          />
          <span className={s.checkmark}></span>
        </label>
      </div>}
      <div className={s.filter_sort}>
        <label className={s.filter_sort_title}>Sorted</label>
        <select name='sort_by' onInput={handleSortOption}>
          <option value='default'>by default</option>
          <option value='priceDesc'>price descending</option>
          <option value='priceAsc'>price ascending</option>
          <option value='name_az'>by name A-Z</option>
          <option value='name_za'>by name Z-A</option>
        </select>
      </div>
    </div>
  )
}
