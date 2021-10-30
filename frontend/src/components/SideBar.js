import { Link } from 'react-router-dom'
import Event from './Event'
import '../css/profilepic.css'
import '../css/sidebar.css'

// Sidebar with user info and Events tab
const SideBar = () => {
    return(
        <div>
            <div className = "box extraMargin">
                <p>3.4k 
                    <span className = "grayText"> followers, </span>89 
                    <span className = "grayText"> following</span></p>
                <p className = "grayText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className = "goldLink">loremipsum.com</p>
            </div>

            <div className = "box explore">
                <h2>Upcoming Events</h2>
                <Event />
                <Event />
                <Event />
                <Link className = "noHighlight" to="/events"><p className = "exploreText">Explore</p></Link>
            </div>
        </div>
    )
  }
  
  export default SideBar