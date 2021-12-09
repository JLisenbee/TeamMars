import { useState, useEffect, useRef } from 'react';
import { useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom'
import ReplyModel from './ReplyModel'
import axios from 'axios'
import Pic from './Pic'
import variable from '../variable'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Reply = ({id, postId, name, picture, content, created, meta}) => {
    
    const userId = useStoreState((store) => store.userId)
    const post = useRef(null)

    const [isAuthor, setisAuthor] = useState(userId === id ? true : false)
   
    useEffect(() => {
        setisAuthor(userId === id ? true : false)
    }, [])


    const formatTime = (timecode) => {
        
        const month = ["Jan","Feb","Mar","Apr","May","June",
                       "July","Aug","Sept","Oct","Nov","Dec"];
        const date1 = timecode.split("-");
        const date2 = date1[2].split("T");
        var time = date2[1].split(":")
        time[0] = time[0] - 5;
        if (time[0] <= 0) {
            time[0] = time[0] + 24;
            date2[0] = date2[0] - 1;
        }
        if (time[0] > 12) {
            time[0] = time[0] - 12;
            time[2] = "p";
        } else {
            time[0] = time[0] - 0;
            time[2] = "a"
        }
        var formatMonth = month[date1[1] - 1];

        var formatted = formatMonth.concat(" ", (date2[0] - 0))
        formatted = formatted.concat(", ", date1[0]);
        formatted = formatted.concat(" ", time[0]);
        formatted = formatted.concat(":", time[1]);
        formatted = formatted.concat(time[2]);
    
        return formatted;
    }

    return(
        <div ref={post} className = "box" style={{ display: 'flex', justifyContent: 'flex-start', alignItems:'flex-start' }}>
            <div>
                <Pic picture={picture} userId={id}></Pic>
            </div>
            <div style={{ margin: '0px', padding: '0px', width: '80%' }}>

                {/* author info */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', fontSize: '2vmin'}}>
                    <p style={{ margin: '0px', padding: '0 0 0 10px', fontWeight: 'bold' }}>{name}</p>
                    <p style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>@{id}</p>  
                    <span style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>&#183;</span>
                    <p style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>{formatTime(created)}</p>
                </div>

                {/* actual post */}
                <p style={{ margin: '0px', padding: '0.5px 0 0 10px', fontSize: '2vmin' }}>{content}</p>
                
            </div>
        </div>
    )
  }
  
  export default Reply;