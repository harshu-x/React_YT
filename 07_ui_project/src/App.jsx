import React from 'react'
import Section1  from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users = [
  {
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    intro:
      'The platform made my workflow extremely smooth and efficient. The interface is intuitive, features are powerful, and overall experience exceeded my expectations.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9',
    intro:
      'I found the service reliable and well designed. It helped me save time, stay organized, and achieve better results with minimal learning effort.',
    tag: 'Very Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    intro:
      'Using this product has been a great experience so far. Performance is consistent, support is helpful, and I would confidently recommend it to others.',
    tag: 'Happy User'
  }
]

  return (
    <div>
    <Section1  users={users}/>
    <Section2 />
    </div>
  )
}

export default App
