import React, { createContext, useState } from 'react'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [isTableMember, setIsTableMember] = useState(false)

  return (
    <UserContext.Provider value={{ isTableMember, setIsTableMember }}>
      {children}
    </UserContext.Provider>
  )
}
