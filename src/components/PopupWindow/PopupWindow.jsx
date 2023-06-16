import React from 'react'
import Button from '../UI/Button/Button';
import s from './PopupWindow.module.css'
import { IoClose } from 'react-icons/io5'

export default function PopupWindow({ messageActive, setMessageActive, h3_text, h4_text }) {
  return (
    <div onClick={() => setMessageActive(false)} className={`${s.modal} ${messageActive && s.active}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${s.modal_content} ${messageActive && s.active}`}>
        <div className={s.message_box}>
          <IoClose className={s.close_btn} onClick={() => {
            setMessageActive(false);
            document.body.style.overflow = '';
          }} />
          <h3>{h3_text}</h3>
          <h4>{h4_text}</h4>
          <Button text={'Continue Shopping'} properties={'header_btn'} onClick={() => {
            setMessageActive(false);
            document.body.style.overflow = '';
          }} />
        </div>

      </div>
    </div>
  )
}
