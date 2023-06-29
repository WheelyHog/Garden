import React from 'react'
import { useSelector } from 'react-redux'
import PopupWindow from '../PopupWindow/PopupWindow'
import Button from '../UI/Button/Button'
import { Input, phoneNumber, required } from '../UI/Input/FormControls'
import s from './OrderDetails.module.css'
import { Field, reduxForm } from 'redux-form';

export const OrderDetails = (props) => {
  const { messageActive, setMessageActive, handleSubmit } = props

  const cart = useSelector(store => store.cart)
  const total_sum = cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0)

  return (
    <div className={s.order}>
      <h2 className={s.order_title}>Order details</h2>
      <div className={s.order_sum}>
        <p className={s.order_text}>Total</p>
        <p className={s.order_amount}>{total_sum}<span> $</span></p>
      </div>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder='Phone number'
          component={Input}
          type='tel'
          name='phone'
          className={s.phone_input}
          validate={[required, phoneNumber]} />
        <Button text={'Order'} properties={'order_btn'} disabled={cart.length === 0 ? true : false} />
      </form>
      <PopupWindow
        messageActive={messageActive}
        setMessageActive={setMessageActive}
        h3_text={'Thank you!'}
        h4_text={'Wait for order details in SMS!'}
      />
    </div>
  )
}

export default reduxForm({
  form: 'order'
})(OrderDetails)