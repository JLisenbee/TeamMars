import { Link } from 'react-router-dom'
import "../css/sidebar.css";

//TODO: Import date, time, name, and event page

// Component for singular events, includes date and time,
// event name and link to event page
const Event = (props) => {
    return(
        <div className = "eventBox">
            <p className = "eventText eventGold">{props.date} {props.time}</p>
            <Link className = "noHighlight" to="/events">
                <p className = "eventText">{props.details}</p>
            </Link>
        </div>
    )
  }
  
  export default Event;