import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <div>
      <h1>THis is the header...{data.username}</h1>
    </div>
  )
}

export default Header
