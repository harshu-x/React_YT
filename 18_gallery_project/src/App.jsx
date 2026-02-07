import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const App = () => {
   const [userData, setUserData] = useState([]);
  const getData =async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data)
    console.log(response.data);
   
  }


  const [index, setIndex] = useState(1);

  useEffect(function(){
    getData();
  },[index])

  let printUserData=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 
  -translate-x-1/2  -translate-y-1/2 font-semibold'>Loading...... </h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem , index){
      return <div key={index}>
        <a href={elem.url} target='_blank'>
      <div className='h-40 w-44 overflow-hidden bg-white rounded-xl' >
        <img className='h-full object-cover' src={elem.download_url} alt='' />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
        
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed bg-amber-300 text-7xl'>{index}</h1>
      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
         onClick={()=>{
          if(index>1)
           setIndex(index-1);
          setUserData([]);
         }}
        >Previous</button>
          <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            setIndex(index+1);
             setUserData([]);
          }}>Next</button>
     
      </div>
    </div>
  )
}

export default App
