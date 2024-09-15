import React from 'react'
import { useParams } from 'react-router-dom'

const Param = () => {
    const {meetID} = useParams()

    console.log(meetID);

  return (
    <div>Param {meetID}</div>
  )
}

export default Param