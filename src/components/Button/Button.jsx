import React from 'react'
import "./Button.css"
const Button = ({data, partnerName}) => {
  return (
    <button className='btn'>{data}{partnerName}</button>
  )
}

export default Button