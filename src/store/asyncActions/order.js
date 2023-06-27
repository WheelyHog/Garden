import { base_url } from "./base_url"

const send_coupon_url = base_url + '/sale/send'
const send_order_url = base_url + '/order/send'

export const send_coupon_request = (phone) => {
  fetch(send_coupon_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(data => console.log('Request sent', data))
    .catch(error => console.error('Error: ', error.message))
}

export const send_order = (phone) => {
  fetch(send_order_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(phone)
  })
    .then(res => res.json())
    .then(data => console.log('Request sent', data))
    .catch(error => console.error('Error: ', error))
}