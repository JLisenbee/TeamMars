import { Link } from 'react-router-dom'
import Post from './Post'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Feed = () => {
    return(
        <div>
            <h2>Your Feed</h2>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
  }
  
  export default Feed;