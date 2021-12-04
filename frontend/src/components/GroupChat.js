import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import io from "socket.io-client"
import "../css/groups.css";


const socket = io('http://localhost:5000');

const GroupChat = (props) => {
    
    const userName = useStoreState((states) => states.userName);
    const userPicture = useStoreState((state) => state.userPicture);
    const url = window.location.pathname;
    const roomCode = url.substring(url.lastIndexOf('/c/'));
    const initialMsg = {
        pic: userPicture, 
        displayname: userName, 
        text: '', 
        code: roomCode
    };
    const [chat, setChat] = useState([]);
    const [msg, setMsg] = useState(initialMsg);
    
    useEffect(() => {

        socket.emit('joinRoom', roomCode);

        socket.on('newMsg', (added) => {
            const update = [...chat, {pic: added.pic, displayname: added.displayname, text: added.text}];
            setChat(update);
        });
        return function leave() {
            socket.emit('leaveRoom', roomCode);
        }
    })

    function handleChange(event) {
        setMsg({...msg, [event.target.name]: event.target.value});
    }

    function handleAdd() {
        if (msg.text.length !== 0) {
            const added = {
                pic: msg.pic, 
                displayname: msg.displayname, 
                text: msg.text,
                code: roomCode
            };
            socket.emit('newMsg', added);
            setMsg(initialMsg);
        }
    }

    return(

        <div className = "box">
            <div className = "chatBox">
                <ul className = "chatStyle">
                {chat.map((item, key) => (
                    <li key={key}><span><img className="chatPic" alt="profile_pic" src={item.pic}/>  {item.displayname}<br /></span>{item.text}</li>
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