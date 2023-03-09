import React from 'react'
import "./Chat.css"
import Logout from './Logout'
function Chat(props) {
    console.log(props.user.photoURL)
  return (
    <div className='AllHolder'>
        <div className='idholder'>
            <img className='iditem' src = {props.user.photoURL}  referrerPolicy = "no-referrer"/>
            <p className='iditem'>{"Welcome to the Chat "+ props.user.displayName}</p>
            {console.log(props.user.displayName)}
            <Logout/>
        </div>
        <div className='ChatHolder'>
          <div className='Chat'>
            <h1>Chatters</h1>
            
          </div>
          <div className='inputs'>
          <input></input>
          <button>Send Your Nice Message</button>
          </div>
        </div>
    </div>
  )
}

export default Chat