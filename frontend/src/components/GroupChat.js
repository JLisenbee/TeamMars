import React from 'react';
import "../css/groups.css";

var username = "DSchrute";
const initialChat = [
    {id: '0', text: ""}
];

const GroupChat = () => {
    const [chat, setChat] = React.useState(initialChat);
    const [name, setName] = React.useState('');

    function handleChange(event) {
      setName(event.target.value);
    }

    function handleAdd() {
        const newChat = chat.concat({ name });
    
        setChat(newChat);
        
      }

    return(
        <div className = "box">
            <div className = "chatBox">
                <ul className = "chatStyle">
                {chat.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
                </ul>
            </div>
            <input type="text" id = "msgText" placeholder = "Enter a message" 
                    maxLength = "256" value = {name} onChange = {handleChange}/>
            <button className = "button submitButton" onClick = {handleAdd}>Submit</button>
        </div>
    )
  }
  
  export default GroupChat