import { Link } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import '../css/profilepic.css'

// Profile pic that links to user profile
const ProfilePic = () => {
  const userPicture = useStoreState((state) => state.userPicture) 
  const userId = useStoreState((state) => state.userId)  
  
  const userUrl = `/user/${userId}`

  return(
      <>
        <Link to={userUrl}>
          <img className="tempPic" alt="profile_pic" src={userPicture}/>
        </Link>
      </>
    )
  }
  
  export default ProfilePic;