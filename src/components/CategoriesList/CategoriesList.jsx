import React from 'react'
import { NavLink } from 'react-router-dom'
import CategoryItem from '../CategoryItem/CategoryItem'
import s from './CategoriesList.module.css'

export default function CategoriesList({ categories, show_btn, title }) {
  return (
    <section className={s.categories_list} id='categories'>
      <div className={s.categories_header}>
        <h2 className={s.categories_title}>{title}</h2>
        {show_btn && <NavLink to='/catalog'><button className={s.categories_btn}>All categories</button></NavLink>}
      </div>
      <div className={s.categories_wrapper}>
        {categories.map(elem => <NavLink to={`/categories/${elem.id}`} key={elem.id}><CategoryItem {...elem} /></NavLink>)}
      </div>
    </section>
  )
}
