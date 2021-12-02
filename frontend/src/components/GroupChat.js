import React, { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy'
import io from "socket.io-client"
import "../css/groups.css";


const socket = io('http://localhost:5000');

const GroupChat = (props) => {
    
    const userName = useStoreState((states) => states.userName)
    
    const [chat, setChat] = useState([]);
    const [msg, setMsg] = useState({username: userName, text: ''});
    
    
    useEffect(() => {
        socket.on('newMsg', (added) => {
            const update = [...chat, {username: added.username, text: added.text}];
            setChat(update);
        });
    })

    


    function handleChange(event) {
        setMsg({...msg, [event.target.name]: event.target.value});
    }

    function handleAdd() {
        if (msg.text.length !== 0) {
            const added = {username: msg.username, text: msg.text};
            socket.emit('newMsg', added);
            setMsg({username: msg.displayname, text: ''})
        }
    }




    return(

        <div className = "box">
            <div className = "chatBox">
                <ul className = "chatStyle">
                {chat.slice(1).map((item, key) => (
                    <li key={key}><span>{item.username}<br /></span>{item.text}</li>
                ))}
                </ul>
            </div>
            <input type="text" id = "msgText" placeholder = "Enter a message"
                    maxLength = "256" value = {msg.text} onChange = {handleChange} name = "text"/>
            <button className = "button submitButton" onClick = {handleAdd}>Submit</button>
        </div>
    )
  }
  
  export default GroupChat