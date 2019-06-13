import React, { useState, useContext, createContext } from 'react'

// 1. 使用 createContext 创建上下文
const UserContext = createContext()

// 2. 创建 Provider
const UserProvider = (props)=>{
  let [username, handleChangeUsername] = useState("")
  return (
  <UserContext.Provider value={{username, handleChangeUsername}} >
    {props.children}
  </UserContext.Provider>
  )
}

const UserConsumer = UserContext.Consumer

export const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext)
  return (
    <>
      <div>user name:{username}</div>
      <input
        onChange={e => {
          handleChangeUsername(e.target.value)
        }}
      />
    </>
  )
}

const Form = () => <Pannel />

const App = () => (
  <div>
    <UserProvider>
      <Form />
    </UserProvider>
  </div>
)

export default App
