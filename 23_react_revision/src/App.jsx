import React from 'react'
import Card from './components/Card'

const App = () => {
  const users =[
  {
    "name": "Amit Sharma",
    "age": 28,
    "city": "Pune",
    "profession": "Software Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "name": "Neha Patel",
    "age": 25,
    "city": "Mumbai",
    "profession": "UI/UX Designer",
    "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "name": "Rahul Verma",
    "age": 32,
    "city": "Bangalore",
    "profession": "Data Analyst",
    "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "name": "Priya Singh",
    "age": 27,
    "city": "Delhi",
    "profession": "Product Manager",
    "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "name": "Karan Mehta",
    "age": 30,
    "city": "Hyderabad",
    "profession": "DevOps Engineer",
    "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]


  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem, index){
            return <Card key={index} username={elem.name} age={elem.age} city={elem.city} prof={elem.profession} pic={elem.profilePhoto}/>
        })}
      </div>
    
    </div>
  )
}

export default App
