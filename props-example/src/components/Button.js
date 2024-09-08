import React from 'react'

const Button = ({text, handleClick, disabled}) => {
  return (
    <button disabled={disabled} onClick={handleClick}>{text}</button>
  )
}

export default Button