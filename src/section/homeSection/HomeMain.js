import React from 'react'
import {Link} from 'react-router-dom'
const HomeMain = () => {
  return (
    <div>
      <Link to='login' style={{margin:"5px"}}>Login</Link>
      <Link to='signup'  style={{margin:"5px"}}>Sign Up</Link>


    </div>
  )
}

export default HomeMain