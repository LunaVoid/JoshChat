import React from 'react'
import "./Login.css"
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import GoogleButton from "react-google-button"
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
function Login() {

    const [user] = useAuthState(auth)
    /*
    const [formData, setFormData] = React.useState({email:"",password:""})
    function handleChange(event){
        const {email,password}= event.target
        setFormData(function(prev){
            return{
                ...prev,
                [event.target.name]:[event.target.value]
            }
        })
        
    }
    console.log(formData)
    function submitChange(){
        event.preventDefault()
        console.log(formData.email + " "+ formData.password)
    }

    will use this later to make nongoogle sign in
    */

    const googleSignIn = function(){
        const provider =  new GoogleAuthProvider()
        signInWithPopup(auth,provider)

    }



  return (
    <div className='Login'>
        {/*
        <form className = "form" onSubmit={submitChange}>
            <input placeholder='Email' name = "email" type='email'onChange={handleChange} value = {formData.email}></input>
            <input placeholder='Password' name = "password" type = "password" onChange={handleChange} value = {formData.password}></input>
            <br></br>
            <button id = "signup">Sign Up</button>
        </form>
        */}
        <h2>Or Sign in with Google</h2>
        <GoogleButton onClick={googleSignIn}/>

    </div>
  )
}

export default Login