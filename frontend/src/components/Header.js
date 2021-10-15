import { Link } from 'react-router-dom'
import Wuphf from '../components/Wuphf'
import { ReactComponent as Chatbox } from '../logos/chatbox.svg';
import { ReactComponent as NoteIcon } from '../logos/notifications.svg';
import { ReactComponent as Megaphone } from '../logos/megaphone.svg';
import "../css/header.css";


// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Header = () => {
    return(
        <div className = "menuContainer"> 
          <div className = "headerEdge">
            <Wuphf />
          </div>

          <div className = "headerCenter">  
            <input type="text" placeholder="Search for groups, users, or events"></input>
          </div>

          <div className = "headerEdge">
            
            <Link className = "noHighlight" to="/notifications"><NoteIcon></NoteIcon></Link>
          
            <Link className = "noHighlight" to="/groups">
              <div className = "groupButton"><Chatbox /> Your Groups</div>
            </Link>

            <Link className = "noHighlight" to="/groups">
              <div className = "groupButton"><Chatbox /> Your Groups</div>
            </Link>
          </div>
        </div>
    )
  }
  
  export default Header;