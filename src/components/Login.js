import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm ,setIsSignInForm] = useState(true);
  const toggleSignUp= ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div><Header/>
    <div className='absolute'>
    <img className='w-screen h-screen' src='https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='imahess' />
    </div>
    
      <form className=' w-2/6 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl  my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (<input className='p-2 my-2 w-full bg-gray-700 bg-opacity-70' type='text' placeholder='Username'></input>)}
        <input className='p-2 my-2 w-full bg-gray-700 bg-opacity-70' type='text' placeholder='Username'></input>
        <input className='p-2 my-2 w-full bg-gray-700 bg-opacity-70' type='password' placeholder='Password'></input>
        <button className='p-4 my-4 w-full bg-red-700' type="submit">{isSignInForm ? "Sign In" :"Sign Up"}</button>
        <p className='py-4 cursor-pointer'
        onClick={toggleSignUp}> {isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In"}</p>
      </form>
    
    </div>
  )
}

export default Login


