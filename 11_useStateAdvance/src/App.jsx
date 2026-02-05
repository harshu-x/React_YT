import React from 'react'
import { useState } from 'react';
const App = () => {
  // const [num, setnum] = useState({user:'Harshal' , age:23});
  

  const [num, setnum] = useState({user:'Rishi' , age:12});
  // const btnClicked =()=>{
  //     const newNum={...num}
  //      newNum.user='Aman'
  //      newNum.age=123
  //      setnum(newNum);
  //     //newNum.user='Aman';
  //     //setnum()

  // }

  const btnClicked =()=>{
    // const newNum=[...num];
    // newNum.push(99);
    // setnum(newNum);

    setnum(prev =>({
      ...prev , age:50
    }))
  }
  
  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button> */}
      
      <h2>{num.user} , {num.age}</h2>
        <button onClick={btnClicked}>Click</button>

    </div>
  )
}

export default App
