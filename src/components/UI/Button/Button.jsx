import React from 'react'
import s from './Button.module.css'

export default function Button({ text, properties, disabled, ...props }) {
  return (
    <button className={`${s[properties]}`} {...props} disabled={disabled}>
      {text}
    </button>
  )
}
