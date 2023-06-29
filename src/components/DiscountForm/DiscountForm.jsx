import React from 'react';
import s from './DiscountForm.module.css'
import dwarf from './assets/gnom.png'
import Button from '../UI/Button/Button';
import PopupWindow from '../PopupWindow/PopupWindow';
import { Field, reduxForm } from 'redux-form';
import { Input, phoneNumber, required } from '../UI/Input/FormControls';


export const DiscountForm = (props) => {
  const { messageActive, setMessageActive, handleSubmit, submitting } = props

  return (
    <section className={s.discount_wrapper}>
      <div className={s.discount_left}>
        <img src={dwarf} alt='dwarf' className={s.discount_img} />
      </div>
      <div className={s.discount_right}>
        <p className={s.discount_title}>5% off </p>
        <p className={s.discount_subtitle}>on the first order</p>
        <form onSubmit={handleSubmit}>
          <Field
            placeholder='+49'
            component={Input}
            type='tel'
            name='phone'
            className={s.discount_input}
            validate={[required, phoneNumber]} />
          <Button text={'Get a discount'} properties={'discount_btn'} disabled={submitting} />
        </form>
      </div>
      <PopupWindow
        messageActive={messageActive}
        setMessageActive={setMessageActive}
        h3_text={'Congratulations!'}
        h4_text={'Now you have discount 5% on the first order!'}
      />
    </section>
  )
}

export default reduxForm({
  form: 'discount'
})(DiscountForm)