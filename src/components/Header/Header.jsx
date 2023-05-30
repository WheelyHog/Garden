import React, { useEffect, useRef, useState } from 'react';
import s from './Header.module.css';
import logo from './assets/logo.png';
import logo_white from './assets/logo_white.png';
import { SlHandbag } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import CartCounter from '../CartCounter/CartCounter'

export default function Header() {
  const refApp = useRef(null);
  const [menuActive, setMenuActive] = useState(false)

  const handleScroll = (event) => {
    if (menuActive) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const menu_list = [
    { id: 1, title: "Main Page", link: "/" },
    { id: 2, title: "All products", link: "/products/all" },
    { id: 3, title: "All sales", link: "/sales/all" }
  ];

  useEffect(() => {
    refApp.current.addEventListener('wheel', handleScroll);
    return () => refApp.current.removeEventListener('wheel', handleScroll);
  });

  return (
    <div className={s.header} ref={refApp}>
      <div className={s.logo_wrapper}>
        <NavLink to='/'><img src={menuActive ? logo_white : logo} alt="logo" /></NavLink>
        <NavLink to='/catalog'><button className={s.header_btn}>Catalog</button></NavLink>
      </div>
      <div className={s.nav_menu}>
        {menu_list.map(elem => <NavLink to={elem.link} key={elem.id}>{elem.title}</NavLink>)}
      </div>
      <div className={s.cart_wrapper}>
        <NavLink to='/cart'><SlHandbag className={s.cart} />
          <CartCounter className={s.cart_counter} />
        </NavLink>
      </div>

      <div className={menuActive ? s.burger_active : s.burger} onClick={() => setMenuActive(!menuActive)}>
        <div className={s.burger_line}></div>
        <div className={s.burger_line}></div>
        <div className={s.burger_line}></div>
      </div>

      <div className={menuActive ? s.mobile_menu_active : s.mobile_menu}>
        <ul className={s.mobile_menu_list}>
          {menu_list.map(elem => <NavLink to={elem.link} key={elem.id}><li onClick={() => setMenuActive(!menuActive)}>{elem.title}</li></NavLink>)}
        </ul>
      </div>
    </div>
  )
}
