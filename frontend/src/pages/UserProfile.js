import {useEffect} from 'react'
import { useRouteMatch, Switch, Route, Link, NavLink, useHistory } from 'react-router-dom'
import FriendList from '../components/FriendList'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import ProfileHeader from '../components/ProfileHeader'
import Post from '../components/Post'
import { ReactComponent as Calendar } from '../logos/calendar.svg';
import { ReactComponent as Group } from '../logos/group.svg';
import { ReactComponent as Flag } from '../logos/flag.svg';
import { ReactComponent as Someone } from '../logos/someone.svg';
import '../css/profilepic.css'
import '../css/profile.css'

const https = "https://";
var postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat. Fermentum leo vel orci porta non pulvinar neque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Purus in mollis nunc sed id.";
var followers = 570;
var following = 444;
var profLink = "twitter.com/UMBC";

function followFmt(x) {
  if (x >= 1000000) {
      x = x / 1000000;
      return x.toFixed(1) + "M";
  }
  else if (x >= 1000) {
      x = x / 1000;
      return x.toFixed(1) + "K";
  }
  else if (x == null) {
      return 0;
  }
  else return x;
}


const About = () => {
  return(
    <>
    <div className = "profileNavBox">
        <div className = "box">
          <p className = "aboutSection">{followFmt(followers)}
                    <span className = "grayText"> followers, </span>{followFmt(following)}
                    <span className = "grayText"> following</span></p>
                <p className = "grayText">{postText}</p>
                <a className = "goldLink" href={https + profLink}><p>{profLink}</p></a>
        </div>
      </div>
    </>
  )
}

const Posts = () => {
  return(
    <>
      <div className = "profileNavBox">
        <div className = "box">
            <p>{postText}</p>
        </div>
        <div className = "box">
            <p>{postText}</p>
        </div>
        <div className = "box">
            <p>{postText}</p>
        </div>
        <div className = "box">
            <p>{postText}</p>
        </div>
      </div>
    </>
  )
}

const Schedule = () => {
    return(
    <>
      <div className = "profileNavBox">
        <div className = "box scheduleText">
          <p>
          <div className="scheduleRight">
            <b> American vs European mail service (w/ someRandomUser)</b>  
              <div className="addCalendarButton"> <Calendar/> Add to calendar </div>
              <div className="groupScheduleButton"><Group/></div>
            </div>
            <Someone className="someoneStyle"/>
            <div className="grayText">
              <span className="postDate">09/16/2021 9:00PM</span> | {postText} 
            </div>
            <div className="tagBox"></div>
            <Flag/>
          </p>
        </div>

        <div className = "box scheduleText">
          <p>
          <div className="scheduleRight">
            <b> American vs European mail service (w/ someRandomUser)</b>  
              <div className="addCalendarButton"> <Calendar/> Add to calendar </div>
              <div className="groupScheduleButton"><Group/></div>
             
            </div>
            <Someone className="someoneStyle"/>
            <div className="grayText">
              <span className="postDate">09/16/2021 9:00PM</span> | {postText} 
            </div>
            <div className="tagBox"></div>
            <Flag/>
          </p>
        </div>

        <div className = "box scheduleText">
          <p>
          <div className="scheduleRight">
            <b> American vs European mail service (w/ someRandomUser)</b>  
              <div className="addCalendarButton"> <Calendar/> Add to calendar </div>
              <div className="groupScheduleButton"><Group/></div>
            </div>
            <Someone className="someoneStyle"/>
            <div className="grayText">
              <span className="postDate">09/16/2021 9:00PM</span> | {postText} 
            </div>
            <div className="tagBox"></div>
            <Flag/>
          </p>
        </div>

        <div className = "box scheduleText">
          <p>
          <div className="scheduleRight">
            <b> American vs European mail service (w/ someRandomUser)</b>  
              <div className="addCalendarButton"> <Calendar/> Add to calendar </div>
              <div className="groupScheduleButton"><Group/></div>
            </div>
            <div className="grayText">
            <Someone className="someoneStyle"/>
              <span className="postDate">09/16/2021 9:00PM</span> | {postText} 
            </div>
            <div className="tagBox"></div>
            <Flag/>
          </p>
        </div>
          
      </div>
    </>
  )
}

const Classes = () => {
  return(
  <>
   <div className = "profileNavBox box">
        
          <h3 className="semester underline">FALL 2021</h3>
          <div className= "classList"><b>CMSC 447</b> - Software Engineering 
          <div className="professor">Renee McDonald</div></div>
          <div className= "classList"><b>CMSC 471</b> - Introduction to Artificial Intelligence
          <div className="professor">Ryan Thompson</div></div>
          <div className= "box classList"><b>STAT 355</b> - Introduction to Statistics for Scientists and Engineers 
          <div className="professor">Lenny Kravitz</div></div>  
          <div className= "box classList"><b>CMSC 441</b> - Design and Analysis of Algorithms
          <div className="professor">Leslie Brown</div></div>
       
    </div>
  </>
  )
}

const Liked = () => {
  return(
  <>
    <div className = "profileNavBox">
      <div className = "box">
            <p>{postText}</p>
      </div>
      <div className = "box">
            <p>{postText}</p>
      </div>
      <div className = "box">
            <p>{postText}</p>
      </div>
      <div className = "box">
            <p>{postText}</p>
      </div>
    </div>
  </>
  )
}


const UserProfile = () => {
  let history = useHistory();
  
  let url = useRouteMatch();
  useEffect(() => {
    console.log('userprofile')
  })

  const logout = () => {
  
  }

  return(
    <>
      <div>
        <Header />
      </div>
      <div className = "menuContainer">

        <div className = "bodyObject bodyLeftEdge column">
          <FriendList />
        </div>

        <div className = "bodyObject bodyCenter column">
          <div className="box">
            <ProfileHeader/>
          </div>
          <div className = "profileNavBar">
            <NavLink className = "userNavButton" activeClassName = "goldSelected" exact to={`${url.url}`}>
              <div className = "underline">
                About
              </div>
            </NavLink>

            <NavLink className = "userNavButton" activeClassName = "underline goldSelected" to={`${url.url}/posts`}>
              
                Posts
            
            </NavLink>

            <NavLink className = "userNavButton" activeClassName = "goldSelected" to={`${url.url}/schedule`}>
              
                Schedule
             
            </NavLink>
         
            <NavLink className = "userNavButton" activeClassName = "goldSelected" to={`${url.url}/classes`}>
              
                Classes
             
            </NavLink>
        
            <NavLink className = "userNavButton" activeClassName = "goldSelected" to={`${url.url}/liked`}>
            
                Liked
             
            </NavLink>
          
          </div>
          
          <Switch>
            <Route exact path={`${url.path}`}><About/></Route>
            <Route exact path={`${url.path}/posts`}><Posts/></Route>
            <Route exact path={`${url.path}/schedule`}><Schedule/></Route>
            <Route exact path={`${url.path}/classes`}><Classes/></Route>
            <Route exact path={`${url.path}/liked`}><Liked/></Route>
          </Switch> 
          
        </div>
           
        <div className = "bodyObject bodyRightEdge"><SideBar />
          <div onClick = {logout} className = "logOutButton">Log Out </div>
        </div>
      </div>    
        
    </>
  )
}



export default UserProfile;