import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
 

  return (
    <div className='h-full p-6 w-3/4 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
     {props.users.map(function(){
       
       return <RightCard />
     })}
        
    </div>
  )
}

export default RightContent
