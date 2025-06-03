import React from 'react'
import Navbar from "./Navbar";
import UserProfile from './UserProfile';

const MainScreen = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <UserProfile/>
    </div>
  )
}

export default MainScreen