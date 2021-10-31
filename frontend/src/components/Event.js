import { Link } from 'react-router-dom'
import "../css/sidebar.css";


// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Event = () => {
    return(
        <div className = "eventBox">
            <p className = "eventText eventGold"> TODAY 2:30</p>
            <p className = "eventText"> Meeting at the Commons</p>
        </div>
    )
  }
  
  export default Event;