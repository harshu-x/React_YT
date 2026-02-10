import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const btnClicked =()=>{
       navigate('/')
    }
  return (
    <div>
      <h1>About Page</h1>
      <button 
      onClick={btnClicked} className='bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button>
    </div>
  )
}

export default About
