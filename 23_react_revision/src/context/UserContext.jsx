import React, { createContext } from 'react'


export const  DataContext = createContext() 
const UserContext = ({children}) => {
    const userData = {
        username:"Harshal Petkar",
        city:"Pune",
        age:23
    }
  return (
    <div>
        <DataContext.Provider value={userData}>
              {children}
        </DataContext.Provider>
  
    </div>
  )
}

export default UserContext
