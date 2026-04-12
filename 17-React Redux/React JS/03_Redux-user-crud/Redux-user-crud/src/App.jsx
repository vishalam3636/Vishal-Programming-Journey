import { useState } from 'react'
import DisplayUsers from './omponents/DisplayUsers'
import UserForm from './omponents/UserForm'

function App() {
  return (
    <>
      <div><h1>Users Crud</h1></div>
      <DisplayUsers />
      <UserForm />
    </>
  )
}

export default App
