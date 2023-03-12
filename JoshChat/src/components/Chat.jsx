import React from 'react'
import "./Chat.css"
import Logout from './Logout'
import {db, auth} from "../firebase"
import Chatmessage from './Chatmessage'
import MessageSend from './messageSend'
import { onSnapshot, orderBy, query, collection } from 'firebase/firestore'

// at 27:31 https://www.youtube.com/watch?v=PJCr_aoOv68

function Chat(props) {
    const [messages,setMessages] = React.useState([])


    const scroll = React.useRef()



    React.useEffect(function(){
      const q = query(collection(db,"messages"),orderBy('timestamp','desc'))
      const unsubscribe = onSnapshot(q,function(querySnapshot){
        let messages = []
        querySnapshot.forEach(function(doc){
          messages.push({...doc.data(), id:doc.id})
        })
        setMessages(messages)
      })
      return function(){
        unsubscribe()
      }
    },[])

  return (
    <main className='AllHolder'>
      
    {/*Could be another component but i dont wanna*/}
        <div className='idholder'>
            <img className='iditem' src = {props.user.photoURL}  referrerPolicy = "no-referrer"/>
            <p className='iditem'>{"Welcome to the Chat "+ props.user.displayName}</p>
            <Logout/>
        </div>
        <h1>Chat</h1>
        <div className="helpme">
          <MessageSend/>
          </div>
        <div className='ChatHolder'>
        
          
          {messages && messages.map((message) =>{
            return(<Chatmessage key = {message.id} contents = {message.text} sender = {message.sender} time = {message.timestamp} photoURL = {message.photoUrl}/>)
            
          })}

        </div>
          
    </main>
  )
}

export default Chat