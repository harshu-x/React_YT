import React from 'react'
import ReactRouterDom from './components_2/ReactRouterDom'
import ContextHeader from './components/ContextHeader'
import ContextSection from './components/ContextSection'
import ContextFooter from './components/ContextFooter'
import { DataContext } from './context/UserContext'
import { useContext } from 'react'
const App = () => {

  const  data = useContext(DataContext)

  console.log(data);
  return (
    <div>
      <h1>This is the end...</h1>
      <ContextHeader />
      <ContextSection />
      <ContextFooter />
    </div>
  )
}

export default App
