import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container'>
        <div className='error-page'>
        <img src='/images/Error.svg'/>
        <NavLink to='/'>Home</NavLink>

    </div>
    </div>
  )
}

export default Error