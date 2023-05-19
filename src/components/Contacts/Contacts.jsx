import React from 'react'
import s from './Contacts.module.css'
import insta from './assets/insta.png'
import whatsapp from './assets/whatsapp.png'

export default function Contacts() {
  return (
    <div className={s.contacts_inner}>
      <div className={s.wrapper}>
        <div className={s.contact}>
          <h3 className={s.title}>Contact</h3>
          <h2 className={s.phone_number}>+49 999 999 99 99</h2>
          <div className={s.social}>
            <div>
              <img src={insta} alt="instagarm" />
              <p>instagram</p>
            </div>
            <div>
              <img src={whatsapp} alt="whatsapp" />
              <p>WhatsApp</p>
            </div>

          </div>
        </div>
        <div className={s.address}>
          <h3 className={s.title}>Address</h3>
          <h3 className={s.map_link}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</h3>
          <p>Working Hours:</p>
          <b>24 hours a day</b>
        </div>
      </div>
    </div>
  )
}
