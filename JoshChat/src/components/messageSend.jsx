import React from 'react'
import {auth, db} from "../firebase"
import { serverTimestamp,addDoc,collection } from 'firebase/firestore'
function messageSend() {
   const [content,setContent] = React.useState("")

   console.log(serverTimestamp())
   function handleChange(event){
        setContent(event.target.value) 
    }

    const submitChange = async(e)=> {
        event.preventDefault()
        console.log(content)
        const {uid, displayName} = auth.currentUser
        
        await addDoc(collection(db,"messages"),{
            text:content,
            sender:displayName,
            uid,
            timestamp:serverTimestamp()
        })
      }

  return (
    <>
        <form onSubmit={submitChange}>
            
            <input type = "text" name = "message" placeholder='send you kind message' onChange={handleChange} value = {content}></input>
            <button>Send Message</button>
        </form>
        


    </>
  )
}

export default messageSend