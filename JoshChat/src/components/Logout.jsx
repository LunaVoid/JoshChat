import React from 'react'
import {auth} from '../firebase'
import { getAuth, signOut } from "firebase/auth"
function Logout() {


    const auth = getAuth();
    function signoutter() {
        signOut(auth).then(() => {
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
    }

    /*
    const signOut = ()=>{
        
        signOut(auth).then(()=>{
            console.log("signed out")

        }).catch((error) => {
            console.log("you fricked up")
            console.log(error)
        })
    }
    */


    return (
        <button className='Logout' onClick={signoutter} >Logout


        </button>
    )
}

export default Logout