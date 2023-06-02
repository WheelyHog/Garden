import React from 'react'
import s from './Button.module.css'

export default function Button({ text, properties, ...props }) {
  return (
    <button className={`${s.button} ${s[properties]}`} {...props}>
      {text}
    </button>
  )
}
