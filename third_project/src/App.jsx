import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18}  img='https://images.unsplash.com/photo-1768928955656-ee026c4baf15?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Sarthak' age={32}  img='https://plus.unsplash.com/premium_photo-1762990917173-a50b472eca42?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card user='Kavita' age={68}  img ='https://images.unsplash.com/photo-1753795249418-6285e6880e03?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       </div>
  )
}

export default App
