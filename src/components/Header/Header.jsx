import React from 'react';
import s from './Header.module.css';
import logo from './assets/logo.png';
import { SlHandbag } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import CartCounter from '../CartCounter/CartCounter'

export default function Header() {

  const menu_list = [
    { id: 1, title: "Main Page", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/sales/all" }
  ];

  return (
    <div className={s.header}>
      <div className={s.logo_wrapper}>
        <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
        <HashLink smooth to='#categories'><button className={s.header_btn}>Catalog</button></HashLink>
      </div>
      <div className={s.nav_menu}>
        {menu_list.map(elem => <NavLink to={elem.link} key={elem.id}>{elem.title}</NavLink>)}
      </div>
      <NavLink to='/cart'><SlHandbag className={s.cart} /></NavLink>
      <CartCounter className={s.cart_counter} />
    </div>
  )
}
