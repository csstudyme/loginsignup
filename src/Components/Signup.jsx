import React from 'react'
import {Link} from 'react-router-dom'
import './signup.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Signup = () => {
  return (
    <>
    <section className="Login containers logsections">
      <div className="wrapper">
        <form action="">
          <h1>Sign up</h1>

          <div className="input-box">
          <input type="text" placeholder='Name' />
            <FaUser className='icon' />
            </div>
          <div className="input-box">
            <input type="email" placeholder='Email' />
            <MdEmail className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' />
            <RiLockPasswordFill className='icon'/>
          </div>
          
          <button type='Sign up'>Sign up</button>
          <div className="register-link">
            <p>Already have an account! <a><Link className='linkk' to='/login'>Login</Link></a></p>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Signup