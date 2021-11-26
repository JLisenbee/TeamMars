import { Link } from 'react-router-dom'
import '../css/profilepic.css'

// Profile pic that links to user profile
const ProfilePic = ({userPicture}) => {
    return(
      <>
        <Link to="/profile">
          <img className="tempPic" alt="profile_pic" src={userPicture}/>
        </Link>
      </>
    )
  }
  
  export default ProfilePic;