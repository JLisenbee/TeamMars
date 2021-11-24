import { Link } from 'react-router-dom'
import Wuphf from '../components/Wuphf'
import ProfilePic from '../components/ProfilePic'
import { ReactComponent as Chatbox } from '../logos/chatbox.svg';
import { ReactComponent as NoteIcon } from '../logos/notifications.svg';
import { ReactComponent as Megaphone } from '../logos/megaphone.svg';
import "../css/header.css";


// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Header = () => {
    return(
        <div className = "menuContainer"> 
          <div className = "bodyObject headerLeftEdge">
            <Wuphf />
          </div>

          <div className = "bodyObject headerCenter">  
            <input type="searchText" placeholder="Search for groups, users, or events"/>
          </div>

          <div className = "bodyObject headerRightEdge">
            <Link className = "noHighlight" to="/notifications"><NoteIcon></NoteIcon></Link>
          
            <Link className = "noHighlight" to="/alerts"><Megaphone /></Link>

            <Link className = "noHighlight" to="/groups">
              <div className = "groupButton"><Chatbox /> Your Groups</div>
            </Link>

            <ProfilePic />
          </div>

        </div>
    )
  }
  
  export default Header;