import React from 'react'


const App = () => {
  
 const user={
  username:'Harshal',
  age:69,
  city:'Bhopal'
 }
 console.log(user);
 localStorage.setItem('user' , JSON.stringify(user));
  return (
    <div>
      App
    </div>
  )
}

export default App
