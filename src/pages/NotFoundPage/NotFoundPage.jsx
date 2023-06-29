import React from 'react'
import s from './NotFoundPage.module.css'
import image from './assets/404.png'

export default function NotFoundPage() {
  return (
    <main className={s.image_container}>
      <div className='container'>
        <img src={image} alt="not_found_image" />
      </div>
    </main>
  )
}
