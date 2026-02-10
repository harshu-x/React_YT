import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  return (
    <div className='nav'>
      <h2>ReactJS School</h2>

      <Navbar2 theme= {props.theme}/>
    </div>
  )
}

export default Navbar
