import React from 'react'
import s from './CategoryItem.module.css'

export default function CategoryItem({ id, title, image }) {

  const base_url = 'http://localhost:3333';

  return (
    <div className={s.category_item}>
      <img src={`${base_url}${image}`} alt={title} className={s.category_image} />
      <h3 className={s.category_title}>{title}</h3>
    </div>
  )
}
