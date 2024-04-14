import React, { useRef, useState } from 'react'
import Header from './Header'
// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {checkValidation} from '../utils/validate'
import { BG_URL } from '../utils/constant';


const Login = () => {
  const [isSignInForm ,setIsSignInForm] = useState(true);
   const [isValidate,setIsValidate] = useState(null);


   const email = useRef(null);
   const password = useRef(null);
   const validatesignup = ()=>{
     
     const message = checkValidation(email.current.value,password.current.value);
     setIsValidate(message)
     
//      if(message) return;

//      if(!isSignInForm){
      
//       const auth = getAuth();
// createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.log(errorCode);
//     console.log(errorMessage);
//   });


//      }else{

//      }

     
   }

  const toggleSignUp= ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div><Header/>
    <div className='absolute'>
    <img className='w-screen h-screen' src={BG_URL} alt='imahess' />
    </div>
    
      <form 
      onSubmit={(e)=>e.preventDefault()}
       className=' w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl  my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (<input className='p-2 my-2 w-full bg-gray-700 bg-opacity-70' type='text' placeholder='Full Name'></input>)}
        <input  ref={email}
        className='p-2 my-2 w-full bg-gray-700 bg-opacity-70' type='email' placeholder='Username'></input>
        <input ref={password}
         className='p-2 my-2 w-full bg-gray-700 bg-opacity-70' type='password' placeholder='Password'></input>
         <p className='text-red-700 font-bold text-lg py-2'>{isValidate}</p>
        <button 
        // onSubmit={(e)=>e.preventDefault()}
        onClick={validatesignup}
        className='p-4 my-4 w-full bg-red-700' type="submit">{isSignInForm ? "Sign In" :"Sign Up"}</button>
        <p className='py-4 cursor-pointer'
        onClick={toggleSignUp}> {isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In"}</p>
      </form>
    
    </div>
  )
}

export default Login


