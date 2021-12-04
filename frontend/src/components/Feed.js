import React, { useState, useEffect } from 'react'
import axios from 'axios'
import variable from '../variable'
import Post from './Post'
import PostButton from './PostButton'

// Feed containing posts specific to the user's subscribed tags
const Feed = () => {

    
    const [isModelOpen, setisModelOpen] = useState(false)
    const [allPosts, setallPosts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: variable.GET_ALL_POST,
            }).then((res) => {
            setallPosts(res.data)
        })
    }, [])

    return(
        <div style={{ width: '100%' }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center' }}>
                <h2>Your Feed</h2>
                <PostButton isModelOpen={isModelOpen} setisModelOpen={setisModelOpen}/>
            </div>
            { 
               allPosts.length === 0 ? 
               <div style={{opacity: '50%', fontStyle: "italic", display: 'flex', justifyContent: 'center'}} >No Posts Here</div>
               :
               allPosts.slice(0).reverse().map((post, key) => (<Post key={key} 
                postId={post._id}
                id={post.authorId} 
                name={post.authorName} 
                picture={post.authorPicture} 
                content={post.content} 
                created={post.created}
                meta={post.meta}></Post>)) 
            }
        </div>
    )
  }
  
  export default Feed;