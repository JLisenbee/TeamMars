import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import '../css/profilepic.css'

// Profile pic that links to user profile
const ProfilePic = () => {
  const userPicture = useStoreState((state) => state.userPicture)  
  return(
      <>
        <Link to="/profile">
          <img className="tempPic" alt="profile_pic" src={userPicture}/>
        </Link>
      </>
    )
  }
  
  export default ProfilePic;