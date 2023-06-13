import React from 'react'
import './signin.css'

function signin() {
  return (
    <div className='sign-in-box'>
        <div className='box1 '>
            <input className="input1 my-4 form-control border" type="email"  placeholder='Email'/>
            <br />
            <input className="input1 form-control border" type="password"  placeholder='Password'/>
            <br />
            <button className='btn btn-primary my-2  '>Signin</button>
        </div>
    </div>
  )
}

export default signin
