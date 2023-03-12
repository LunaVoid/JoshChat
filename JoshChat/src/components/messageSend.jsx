import React from 'react'
import {auth, db} from "../firebase"
import { serverTimestamp,addDoc,collection } from 'firebase/firestore'
function messageSend() {
   const [content,setContent] = React.useState("")
   
   function handleChange(event){
        setContent(event.target.value) 
    }

    const submitChange = async(e)=> {
        event.preventDefault()
        setTimeout(function(){
            console.log("Executed after 1 second");
        }, 1000);
        const {uid, displayName} = auth.currentUser
        
        
        await addDoc(collection(db,"messages"),{
            text:content,
            sender:displayName,
            uid,
            timestamp:serverTimestamp(),
            photoUrl:auth.currentUser.photoURL
        })
        setContent("")
      }

  return (
    <>
        <form onSubmit={submitChange}>
            
            <input required type = "text" name = "message" placeholder='send you kind message' onChange={handleChange} value = {content}></input>
            <button>Send Message</button>
        </form>
        


    </>
  )
}

export default messageSend