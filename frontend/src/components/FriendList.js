import { Link } from 'react-router-dom'
import Friend from './Friend'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const FriendList = () => {
    return(
        <div>
            <h2>Friends Online</h2>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
        </div>
    )
  }
  
  export default FriendList