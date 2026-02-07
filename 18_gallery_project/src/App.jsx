import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const App = () => {
   const [userData, setUserData] = useState([]);
  const getData =async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    setUserData(response.data)
    console.log(response.data);
   
  }

  let printUserData='No User Avalable'

  if(userData.length>0){
    printUserData = userData.map(function(elem , index){
      return <div key={index}>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl' >
        <img className='h-full object-cover' src={elem.download_url} alt='' />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button 
      onClick ={getData}className='bg-green-600 active:scale-95 mb-3 px-5 py-2 text-white rounded'>Get Data
      </button>


      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
