import React from 'react'

const App = () => {
  const submitHandler =(e)=>{
     e.preventDefault();
    console.log("Form is submitted");
  }
  return (
    <div className='h-screen  bg-black text-white'>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}
    className='flex justify-between items-start  p-10'>
    <div className='flex w-1/2 items-start gap-4 flex-col'>
       <input type='text' 
      placeholder='Enter Notes Heading' 
      className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
      />
      <textarea
      type= 'text'
      placeholder='Write Detail'
        className='px-5 w-full  h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
       />

       <button className='bg-white w-full text-black outline-none px-5 py-2 rounded'>Add Button</button>
     </div>
    <img  className='h-72'src='https://imgs.search.brave.com/eliG2SzIwcJ_wvslqCuiaoVelA2P6pF-R6DnKTpyPGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9TdGlj/a3ktTm90ZXMtUE5H/LUZpbGUtRG93bmxv/YWQtRnJlZS5wbmc' />
    </form>
    </div>
  )
}

export default App
