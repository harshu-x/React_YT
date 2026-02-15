import React from 'react'
import { useState } from 'react';
const State = () => {
      const [num, setNum] = useState(2);
   const increment =()=>{
       setNum(num+1);
   }

     const decrement =()=>{
       setNum(num-1);
   }
  return (
    <div>
      <h3>Number is {num}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default State
