import React from 'react'
import s from './CategoryItem.module.css'
import { base_url } from '../../asyncActions/requests'

export default function CategoryItem({ title, image }) {

  return (
    <div className={s.category_item}>
      <img src={`${base_url}${image}`} alt={title} className={s.category_image} />
      <h3 className={s.category_title}>{title}</h3>
    </div>
  )
}
