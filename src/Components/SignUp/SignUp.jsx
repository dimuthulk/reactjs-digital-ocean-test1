import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router';

function SignUp() {
    const backendUrl = "http://localhost:3000/user/signin";

  return (
    <>
    <h1 className='main-text'>Login System Using MEAN Stack</h1>
    <div className='container'>
        <div className="div4">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <Link to="/"><button>SIGN IN</button></Link>
        </div>
        <div className="div3">
            <h1>Sign Up</h1>
            <input type="text" name="" id="" placeholder='Name'/>
            <input type="email" name="" id="" placeholder='example@gmail.com'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <h4>Date of Birth</h4>
            <input type="date" name="birth" id="" placeholder='Date of birth' />
            <a href="">Forget your password?</a>
            <Link to="/signup"><button>SIGN UP</button></Link>
        </div>
    </div>
    </>
  )
}

export default SignUp