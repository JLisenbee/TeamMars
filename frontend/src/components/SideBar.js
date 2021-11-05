import { Link } from 'react-router-dom'
import Event from './Event'
import '../css/profilepic.css'
import '../css/sidebar.css'

// https: used to turn profLink into actual link
const https = "https://";

// TODO: Backend for importing variables
//       Format dates / times  for curEvents
//       Profile pic, user info on bio (based on Figma design)
// profBio: import user bio
var profBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// profLink: import user link (if exists)
var profLink = "twitter.com/UMBC";
// followers/following: import follower and following counts (as numbers)
var followers = 3456;
var following = 89;
// curEvents: import next three events on schedule
var curEvents = [["TODAY", "2:30 PM", "Meeting at the Commons"],
                 ["TOMORROW", "11:15 AM", "Advising w/ Schrute"],
                 ["12/17", "3:00 PM", "447 Quiz cram session"]];

// Function to format follower and following count
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

// Sidebar with user info and Events tab
const SideBar = () => {
    return(
        <div>
            <div className = "box profBox">
                <p>{followFmt(followers)}
                    <span className = "grayText"> followers, </span>{followFmt(following)}
                    <span className = "grayText"> following</span></p>
                <p className = "grayText">{profBio}</p>
                <a className = "goldLink" href={https + profLink}><p>{profLink}</p></a>
            </div>

            <div className = "box explore">
                <h2>Upcoming Events</h2>
                <Event date = {curEvents[0][0]} time = {curEvents[0][1]} details = {curEvents[0][2]} />
                <Event date = {curEvents[1][0]} time = {curEvents[1][1]} details = {curEvents[1][2]} />
                <Event date = {curEvents[2][0]} time = {curEvents[2][1]} details = {curEvents[2][2]} />
                <Link className = "noHighlight" to="/events">
                    <p className = "exploreText">Explore</p>
                </Link>
            </div>
        </div>
    )
  }
  
  export default SideBar