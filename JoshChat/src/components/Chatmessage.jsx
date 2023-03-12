import React from 'react'
import "./Chatmessage.css"
function Chatmessage(props) {
    console.log(props.time)
    let date
    try {
        date = new Date(props.time.seconds*1000).toString()
    } catch (error) {
        console.log(date)
        date = null
    }
    
    

  return (
    <div>
        <div className='message'>
            <p>{props.sender}</p>
            <p>{props.contents}</p>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Chatmessage