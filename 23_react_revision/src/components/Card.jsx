import React from 'react'

const Card = (props) => {
 
  return (
    <div className='bg-white text-black inline-block p-6 text-center rounded-2xl'>
       <img  className='ml-8 h-32 w-32 rounded-full mb-3' src='' alt='' />       
        <h1 className='text-2xl font-semibold mb-4'>Usernmae is {props.user}</h1>
        <h2>City is {props.city}, And the age is {props.age}</h2>
        <button className='mt-4 bg-emerald-700 text-white px-4 py-2 rounded font-medium '>Add Friend</button>
      
    </div>
  )
}

export default Card
