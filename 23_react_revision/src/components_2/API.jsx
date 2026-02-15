import React from 'react'
import axios from 'axios';
const API = () => {
      const [data, setData] = useState([]);
  const getData = async () =>{
      const  response = await axios.get('https://picsum.photos/v2/list')
      console.log(response.data)
      setData(response.data);
  }
  return (
     <div className='p-10'>
  <button  onClick={getData} className='bg-emerald-500 text-white font-semibold text-2xl px-6 py-3 rounded-2xl active:scale-90'>Get Data</button>
  <div className='p-5  "p-5 bg-gray-900 grid grid-cols-3 gap-4'>
 
     {data.map(function(elem , key){
       return <div key={elem.id} className=' mr-2 bg-amber-400 mb-2'>
         <h1>{elem.id}</h1>
        <h1>{elem.author}</h1>
       
        <h3>{elem.url}</h3>

      </div>
    })}
 
   
  </div>
   </div>
  )
}

export default API
