import React, { useEffect } from 'react';
import io from "socket.io-client"
import { v4 as uuidv4 } from 'uuid';
import "../css/groups.css";

var displayname = "DSchrute"; // TODO: Fetch username from backend
const initialChat = [
    {username: '', text: ''}
];

const GroupChat = (props) => {
    const [chat, setChat] = React.useState(initialChat);
    const [msg, setMsg] = React.useState({username: displayname, text: ''});

    var socket = io('http://localhost:4000', { transports : ['websocket'] });

function handleChange(event) {
    setMsg({...msg, [event.target.name]: event.target.value});
}

function handleAdd() {
    if (msg.text == '') {
        return;
    }
    socket.emit('new msg', msg.username, msg.text);
    setMsg({username: msg.username, text: ''});
}


socket.on('new msg', (newUsername, newText) => {
    const newChat = chat.concat({username: newUsername, text: newText});
    setChat(newChat);
  });


    return(

        <div className = "box">
            <div className = "chatBox">
                <ul className = "chatStyle">
                {chat.slice(1).map((item) => (
                    <li key={uuidv4()}><span className = "goldText">{item.username}<br /></span>{item.text}</li>
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