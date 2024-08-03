import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Please Signup</h1>
      <input style={{ border: '1px solid black' }} type="text" placeholder='Email' /> <br />
      <input type="password" placeholder='Password' /> <br />
      <button>Signup</button>
    </div>
  )
}

export default Signup
