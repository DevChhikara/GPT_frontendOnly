import React from 'react'
import "./login.css"
import left from "../../assets/left.png"
import google from "../../assets/google.png"
import apple from "../../assets/apple.png"

const Login = () => {
    return (
        <di className="main-box">
            <div className="left-side">
                <div className="left-side-head">
                    <h1>Chat GPT</h1>
                </div>
                <div className="left-side-content">
                    <div className="left-side-content-1">
                        <p>Learn, Discover &</p>
                    </div>
                    <div className="left-side-content-2">
                        <p>Automate in One Place </p>
                    </div>
                </div>
            </div>
            <div className="right-side22">
                <div className="right-side-form-box">
                    <h4>Sign Up</h4>
                    <p className="sub-des">Empower your experience with us !</p>

                    <p className="email">Email Address*</p>
                    <input className='em-input' type="email" required placeholder='   Example@gmail.com' />
                    <p className="email">Password*</p>
                    <input className='em-input' type="password" required placeholder='   Password' />
                    <p className="terms">By registering for an account , you are consenting to our <a href='#'>Terms of services</a>  and confirming that you have reveiwed and accepted our privacy statement.</p>
                    <a href="/Gpt3"><button class="button-9" role="button">Get Started</button></a>
                    <p className="log">Already have a account? <a href="#">Login</a></p>
                </div>
                <div className="right-side-form-opt">
                    <button class="button-9 google" role="button"> <img src={google} alt="" srcset="" /> Sign In with Google</button>
                    <button class="button-9 apple" role="button"> <img src={apple} alt="" /> Sign In with Apple</button>
                </div>
            </div>

        </di>
    )
}

export default Login