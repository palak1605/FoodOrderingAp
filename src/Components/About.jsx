import React from 'react'
// import { Outlet } from 'react-router-dom'
//importing outlt for the nested or importing the component that we have as a child
// Both ways are correct to import children component or nested route
import Profile from './Profile'
function About() {
  return (
    <div>About
        {/* <Outlet/> */}
        <Profile/>
    </div>
    
  )
}

export default About