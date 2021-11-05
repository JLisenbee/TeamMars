import { Link } from 'react-router-dom'
import ProfilePic from './ProfilePic'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Post = (props) => {
    return(
        <div className = "box">
            <p>{props.body}</p>
        </div>
    )
  }
  
  export default Post;