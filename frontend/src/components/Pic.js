import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/profilepic.css'

// Profile pic that links to user profile
const ProfilePic = ({picture, userId}) => {
   
  const userUrl = `/user/${userId}`

  useEffect(() => {
    console.log(picture)
  }, [picture])

  return(
      <>
        <Link to={userUrl}>
          <img style={{ margin: '0px', padding: '0px' }} className="tempPic" alt="pic" src={picture}/>
        </Link>
      </>
    )
  }
  
  export default ProfilePic;