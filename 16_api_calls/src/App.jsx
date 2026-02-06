import React from 'react'
import axios from "axios";
import { useState } from 'react';
const App = () => {
const [data, setData] = useState([]);
const getData = async()=>{
 const response = await axios.get('https://picsum.photos/v2/list');

 setData(response.data);

}
    //ASYNC AWAIT METHOD....
//  const getData = async()=>{

//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//    const data =await response.json();
//    console.log(data);
// }
  return (
    <div>
      <button onClick={getData}> Get Data</button>
       <div>
        {data.map(function(elem){
           return <h2> Hello , {elem.author}</h2>
        })}
       </div>
    </div>
  )
}

export default App
