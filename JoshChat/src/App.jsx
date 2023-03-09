import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/Login'
import {auth} from "./firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from './components/Chat'

function App() {
  const [user] = useAuthState(auth)
  console.log(user)


  return (
    <div className="App">
      {(user == null)?<Login/>:<Chat user = {user}/>
        
      }
    </div>
  )
}

export default App
