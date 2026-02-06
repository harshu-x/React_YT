import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';
const App = () => {
  const submitHandler =(e)=>{
     e.preventDefault();

     const copyTask=[...task];

     copyTask.push({title , details});
     setTask(copyTask);
     console.log(copyTask);
    setTitle(' ');
    setDetails(' ');
  }

 const [title, setTitle] = useState('');

const [details, setDetails] = useState();

const [task, setTask] = useState([]);

const deleteNote =(index)=>{
    const copyTask =[...task];
    console.log(copyTask[index]);

    copyTask.splice(index ,1);
    setTask(copyTask);
}

  return (
    <div className='h-screen lg:flex bg-black text-white  '>
     
    <form onSubmit={(e)=>{ 
      submitHandler(e)
    }}
    className='flex gap-4 lg:w-1/2 flex-col items-start  p-10'>
       <h1 className='text-3xl font-bold'>ADD NOTES</h1> 
       {/* FIRST INPUT FOR HEADING */}
       <input type='text' 
      placeholder='Enter Notes Heading' 
      className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
      value={title}
      onChange={(e)=>{
       setTitle(e.target.value)
      }}
      />

    {/* SECOND INPUT FOR HEADING */}
      <textarea
      type= 'text'
      placeholder='Write Detail'
        className='px-5 w-full  h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value);
         }}
       />

       <button className='bg-white w-full text-black outline-none 
       px-5 py-2 rounded active:bg-black'>Add Button</button>
     
    
    </form>

    <div className=' lg:w-1/2  lg:border-l-2   p-10'>
    <h1 className='text-3xl font-bold'>RECENT NOTES</h1>
    <div className='flex  flex-wrap items-start justify-start gap-5 mt-5  h-[90%] overflow-auto'>
        {task.map(function(elem, index){
          return <div key={index} className='flex justify-between flex-col items-start relative pb-5 h-52 w-40 rounded-xl text-black p-4 bg-white'> 
          <div>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-2 leading-tight font-medium text-gray-500 overflow-y-auto'>{elem.details}</p>
            </div>
             <button onClick={()=>{
              deleteNote(index);
             }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
           
    </div>
     
    </div>
    </div>
  )
}

export default App
