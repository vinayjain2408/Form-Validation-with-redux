import React from 'react'
import Login from './Components/Login'
// import { useSelector } from 'react-redux'
// import {  selectUser } from './features/UserSlice'
// import Logout from "./Components/Logout"

function Home() {
  // const user = useSelector(selectUser)
  return (
    <div>
      {/* {
        user ? <Logout /> : <Login />
      } */}


      <Login />
      
    </div>
  )
}

export default Home