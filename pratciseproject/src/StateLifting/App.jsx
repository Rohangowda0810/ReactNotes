import React, { useState } from 'react'
import Adduser from './Statelifting/Adduser'
import Displayuser from './Statelifting/Displayuser'

function App() {
  const[user,setUser]=useState('')
  return (
    <>
<Adduser setUser={setUser}/>
<Displayuser user={user}/>
    </>
  )
}

export default App