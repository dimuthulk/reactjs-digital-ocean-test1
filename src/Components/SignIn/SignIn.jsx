import React from 'react';
import "./SignIn.css";
import { Link } from 'react-router';

function SignIn() {
    const backendUrl = "http://localhost:3000/user/signin";

    const downloadfile = ()=>{
        const link = document.createElement('a');
        link.href = 'https://dimuthuls-app-8tpj5.ondigitalocean.app/May%20Flyer.jpg';
        link.setAttribute('download', 'May Flyer.jpg'); // Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("File downloaded successfully");
    }

  return (
    <>
    <h1 className='main-text'>Login System Using MEAN Stack</h1>
    <img className='main-img' src="May Flyer.jpg" alt="" />
    <button className='down-btn' onClick={downloadfile}>Download</button>
  
    <div className='container'>
        <div className="div1">
            <h1>Sign In</h1>
            <input type="email" name="" id="" placeholder='example@gmail.com'/>
            <input type="password" name="" id="" placeholder='Password'/>
            <a href="">Forget your password?</a>
            <Link to="/"><button>SIGN IN</button></Link>
        </div>
        <div className="div2">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <Link to="/signup"><button>SIGN UP</button></Link>
        </div>
    </div>
    </>
  )
}

export default SignIn