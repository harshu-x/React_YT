

import { Routes ,Route } from 'react-router-dom';
import About from '../pages/About';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import RouterDomHeader from '../components/RouterDomHeader';
const ReactRouterDom = () => {
  return (
    <div>
    <RouterDomHeader/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element ={<About />}/>
      <Route path='/contact' element ={<Contact />}/>
      <Route path='/product' element ={<Product />}/>
      
    </Routes>
  </div>

  )
}

export default ReactRouterDom
