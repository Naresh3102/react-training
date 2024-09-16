import React from 'react'
import { useParams } from 'react-router-dom'

const Param = () => {
    const {productId} = useParams()

    console.log(typeof(productId));

  return (
    <div>Param {productId}</div>
  )
}

export default Param