import { Link } from 'react-router-dom'
import Wuphf from '../components/Wuphf'
import { ReactComponent as Chatbox } from '../logos/chatbox.svg';
import { ReactComponent as Notifications } from '../logos/notifications.svg';
import { ReactComponent as Megaphone } from '../logos/megaphone.svg';
import "../css/header.css";


// Footer for the login, TOS, and Privacy Policy pages.
// Contains the Wuphf logo on the left of the pages and
// internal and external links on the right
const Header = () => {
    return(
        <div className = "menuContainer"> 
          <div className = "headerLink">
            <Wuphf />
          </div>

          <div className = "headerLink">  
            <input type="text" placeholder="Search for groups, users, or events"></input>
          </div>
        </div>
    )
  }
  
  export default Header;