import React, { useState } from 'react';
import s from './Header.module.css';
import logo from './assets/logo.png';
import logo_white from './assets/logo_white.png';
import { SlHandbag } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import CartCounter from '../CartCounter/CartCounter'
import Button from '../UI/Button/Button';
import Burger from '../Burger/Burger';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)

  const menu_list = [
    { id: 1, title: "Main Page", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/sales/all" }
  ];

  if (menuActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <header className={s.header} >
      <div className={s.logo_wrapper}>
        <NavLink to='/'><img src={menuActive ? logo_white : logo} alt="logo" /></NavLink>
        <NavLink to='/catalog'><Button text={'Catalog'} properties={'header_btn'} /></NavLink>
      </div>
      <div className={s.nav_menu}>
        {menu_list.map(elem => <NavLink to={elem.link} key={elem.id}>{elem.title}</NavLink>)}
      </div>
      <div className={s.cart_wrapper}>
        <NavLink to='/cart'>
          <SlHandbag className={s.cart}
            style={menuActive ? { color: 'white' } : { color: 'black' }}
            onClick={() => {
              menuActive && setMenuActive(!menuActive)
            }}
          />
          <CartCounter className={s.cart_counter} />
        </NavLink>
      </div>
      <Burger menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className={menuActive ? s.mobile_menu_active : s.mobile_menu}>
        <ul className={s.mobile_menu_list}>
          {menu_list.map(elem => <NavLink to={elem.link} key={elem.id}><li onClick={() => setMenuActive(!menuActive)}>{elem.title}</li></NavLink>)}
        </ul>
      </div>
    </header >
  )
}
