import React from 'react'
import s from './Contacts.module.css'
import { SlSocialInstagram } from 'react-icons/sl'
import { BsWhatsapp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export default function Contacts() {
  return (
    <div className={s.contacts_inner}>
      <div className={s.wrapper}>
        <div className={s.contact}>
          <h3 className={s.title}>Contact</h3>
          <NavLink to={'tel:+499999999'} className={s.phone_number}>+49 999 999 99 99</NavLink>
          <div className={s.social}>
            <div>
              <NavLink to={'https://www.instagram.com/'}><SlSocialInstagram className={s.social_img} /></NavLink>
              <p>instagram</p>
            </div>
            <div>
              <NavLink to={'https://www.whatsapp.com/'}><BsWhatsapp className={s.social_img} /></NavLink>
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
        <div className={s.address}>
          <h3 className={s.title}>Address</h3>
          <a className={s.map_link} href='https://g.page/telranDE?share'>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
          <p>Working Hours:</p>
          <b>24 hours a day</b>
        </div>
      </div>
    </div>
  )
}
