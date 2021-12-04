import { Link } from 'react-router-dom'
import "../css/groups.css";

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const GroupTab = ({title, address, description}) => {

    function textOverflow(text) {
        if (text.length > 270) {
            return (text.substring(0, 270) + "...");
        } else {
            return text;
        }
    }

    return(
        <Link className = "noHighlight" to = {"/groups/c/" + address}>
            <div className = "tabBox">
                <h1>{title}</h1>
                <p><span>About: </span>{textOverflow(description)}</p>
            </div>
        </Link>
    )
  }
  
  export default GroupTab;