import React from 'react'
import s from './Burger.module.css'

export default function Burger({ menuActive }) {
  return (
    <div className={menuActive ? s.burger_active : s.burger} onClick={() => setMenuActive(!menuActive)}>
      <span className={s.burger_line}></span>
      <span className={s.burger_line}></span>
      <span className={s.burger_line}></span>
    </div>
  )
}
