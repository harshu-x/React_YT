import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../context/UserContext'
const ContextHeader = () => {
      const data = useContext(DataContext);
  return (
    <div>
      <h1>This is context header wala header..{data.username}</h1>
    </div>
  )
}

export default ContextHeader
