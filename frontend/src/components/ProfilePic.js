import { Link } from 'react-router-dom'
import '../css/profilepic.css'

// Profile pic that links to user profile
const ProfilePic = () => {
    return(
      <>
        <Link className = "tempPic" to="/profile">   
        </Link>
      </>
    )
  }
  
  export default ProfilePic;