import React from 'react'
import "./Chatmessage.css"
import {auth} from "../firebase"
function Chatmessage(props) {
    
    let date
    try {
        date = new Date(props.time.seconds*1000).toString()
    } catch (error) {
        date = null
    }
    
    

  return (
    <div>
        <div className='message'>
            <img className = "items" src = {props.photoURL}></img>
            <p className = "items">{props.sender}</p>
            <p className = "items">{props.contents}</p>
         
        </div>
        <p id = "date">{date}</p>
    </div>

  )
}

export default Chatmessage