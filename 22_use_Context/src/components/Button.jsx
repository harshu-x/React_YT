import React from 'react'
import { useContext } from 'react';
import ThemeContext, { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
 const [theme ,setTheme] = useContext(ThemeDataContext)
    const changeTheme =()=>{
       setTheme('dark');
    }
  return (
    <div>
     <button onClick={changeTheme}>
        Change Button
     </button>
    </div>
  )
}

export default Button
