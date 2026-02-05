import React, { useEffect } from 'react'

import { useState } from 'react';

const App = () => {
//  const [num, setNum] = useState(10);
   
//   const [username, setusername] = useState('Harshal');
//  const [users, setusers] = useState([10,209,340]);
  
//  function changeNum(){
//       setNum(30);
//       setusername('harshux_07');
//       setusers([10324]);
 //}    

 const [num, setnum] = useState(10);

 function increase(){
  setnum(num + 1);
 }

 function decrease(){
  setnum(num-1);
 }

 function jump5(){
   setnum(num+5);
 }
  return (
    <div>
      {/* <h1>Value of a is {num}  <br /> Value of user is {username} <br /> {users}</h1>
      <button onClick={changeNum}>Click me!!</button> */}
     <h1>{num}</h1>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
      <button onClick={jump5}>Jump By 5 </button>
    </div>
  )
}

export default App
