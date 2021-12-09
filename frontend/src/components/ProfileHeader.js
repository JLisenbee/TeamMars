import React from 'react';
import '../css/profilepic.css'
import { ReactComponent as Adduser } from '../logos/adduser.svg';
import { ReactComponent as Chatbox } from '../logos/chatbox.svg';
import { ReactComponent as Flag } from '../logos/flag.svg';
import { ReactComponent as Majors } from '../logos/majors.svg';
import { useStoreState } from 'easy-peasy';

const ProfileHeader = () => {

    const userName = useStoreState((states) => states.userName);
    const userPicture = useStoreState((state) => state.userPicture);
    const userId = useStoreState((store) => store.userId);

    return(
        <div className="box">
            <div className = "profileHeader">
                <div className= "headerPic"></div>
                <div><img className="userPic" alt="profile_pic" src={userPicture}/></div>
                <Majors className= "majorsTag"/>
                <div className = "followButton">
                <Adduser/> Follow
                </div>
                <div className= "dmButton"> < Chatbox/> Send DM </div>
                <div className= "usernameText">
                    <h2 className= "right">{userName}</h2> 
                    <span className= "grayText right usernameText">@{userId}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;