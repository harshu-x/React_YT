import React from 'react'

const Card = (props) => {
    
  return (
    <div className='card'>
           <img src={props.img} alt="hi" />
           <h1> {props.user} </h1>
           <p>Hi My name is {props.user} and I m looking for some internshippp and my age is {props.age}...</p>
          <button> View Profile</button>
   
        
         </div>
  )
}

export default Card
