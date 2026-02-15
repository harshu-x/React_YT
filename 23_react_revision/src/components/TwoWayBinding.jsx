import React from 'react'
import { useState } from 'react'
const TwoWayBinding = () => {
    const [username, setUsername] = useState("");
  const submitHandler = (e)=>{
 
     e.preventDefault();
     console.log('The username is ' + username);

   setUsername('');
  }
  const onChangeValue = (e) =>{
      setUsername(e.target.value);
      console.log(setUsername);
  }
  return (
   <div>
      <form onSubmit={submitHandler} >
      
        <input 
        onChange= {onChangeValue} value={username} className='px-4 py-3 rounded bg-amber-50 m-5' type="text"  placeholder='Enter your name' />
        <button className='px-4 py-3 text-white rounded-xl text-xl m-5 font-semibold bg-emerald-500'>Submit</button>
      </form>
    </div>
  )
}

export default TwoWayBinding
