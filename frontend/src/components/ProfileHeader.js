import React from 'react';
import '../css/profilepic.css'
import { ReactComponent as Adduser } from '../logos/adduser.svg';
import { ReactComponent as Chatbox } from '../logos/chatbox.svg';
import { ReactComponent as Flag } from '../logos/flag.svg';
import { ReactComponent as Majors } from '../logos/majors.svg';

var userName = "@DSchrute"
var user = "Dwight Schrute"

const ProfileHeader = () => {
    return(
        <div className="box">
            <div className = "profileHeader">
                <div className= "headerPic"></div>
                <div className = "userPic"></div>
                <Majors className= "majorsTag"/>
                <div className = "followButton">
                <Adduser/> Follow
                </div>
                <div className= "dmButton"> < Chatbox/> Send DM </div>
                <div className= "usernameText">
                    <h2 className= "right">{user}</h2> 
                    <span className= "grayText right usernameText">{userName}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;