import { Link } from 'react-router-dom'
import Post from './Post'

var postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat. Fermentum leo vel orci porta non pulvinar neque. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Purus in mollis nunc sed id.";

// Feed containing posts specific to the user's subscribed tags
const Feed = () => {
    return(
        <div>
            <h2>Your Feed</h2>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
            <Post body = {postText}/>
        </div>
    )
  }
  
  export default Feed;