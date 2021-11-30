import { Link } from 'react-router-dom'
import '../css/profilepic.css'

// Profile pic that links to user profile
const ProfilePic = ({picture}) => {
  return(
      <>
        <Link>
          <img style={{ margin: '0px', padding: '0px' }} className="tempPic" alt="profile_pic" src={picture}/>
        </Link>
      </>
    )
  }
  
  export default ProfilePic;