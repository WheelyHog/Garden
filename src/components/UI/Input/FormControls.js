import React from "react";
import s from './Input.module.css'

export const Input = ({ input, meta, ...props }) => {

  const hasError = meta.error && meta.touched;
  return (
    <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
      {hasError && <span className={s.warning}>{meta.error}</span>}
      <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
        <input {...input} {...props} />
      </div>
      {/* {hasError && <span>{meta.error}</span>} */}
    </div>
  )
}

export const required = value => {
  if (value) return undefined
  return 'Field reqiured!';
}

export const phoneNumber = value =>
  value && !/^([+]{1}[1-9][0-9]{10})$/i.test(value)
    ? 'Invalid phone number, it must be in format: +49123456789'
    : undefined