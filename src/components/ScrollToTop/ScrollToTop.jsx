import React, { useState } from 'react'
import s from './ScrollToTop.module.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'


export default function ScrollToTop() {

  const [showScroll, setShowScroll] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={s.scroll_btn}>
      {showScroll && <BsFillArrowUpCircleFill className={s.scroll_icon} onClick={scrollToTop} />}
    </div>
  )
}
