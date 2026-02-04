import React from 'react'

const RightCardContent = () => {
  return (
     <div  className='h-full overflow-hidden relative w-80 bg-red-100 rounded-4xl '>
   
      <img className=' h-full w-full object-cover'src="https://media.istockphoto.com/id/1633543792/photo/businesswoman-with-arms-crossed-standing-on-white-background.jpg?s=612x612&w=is&k=20&c=o7UKVt-OpeXcb8-7zg_EuNYYw0C_x10DYJy5GGE3cL8= " alt=" " /> 
       <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col 
       justify-between'>
          <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
          <div>
            <p className='text-lg leading-relax text-white mb-14'>cart checkout discount price sale coupon brand store aisle shelf online payment delivery return receipt groceries loyalty </p>

            <div>
                <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full '> Satisfied</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default RightCardContent
