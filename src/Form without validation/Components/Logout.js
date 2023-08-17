import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/UserSlice'

function Logout() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  function handleLogout(){
    dispatch(logout())
  }
  return (
    <div>
        <h1>Welcome <span>{user.name}</span></h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout