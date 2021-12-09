import React, { useState, useEffect } from 'react'
import Post from './Post'
import Reply from './Reply'
import PostButton from './PostButton'

// Feed containing posts specific to the user's subscribed tags
const ReplyFeed = ({data}) => {

    const [isModelOpen, setisModelOpen] = useState(false)
    const [allReplies, setallReplies] = useState([])
    const [postData, setpostData] = useState([])

    useEffect(() => {
        console.log(data)
        console.log(data.meta)
        console.log(data.meta.comments)
        setpostData(data)
        setallReplies(data.meta.comments)
    }, [data, data.meta.comments])

    return(
        <div style={{ width: '100%' }}>
            {
                postData.length !== 0 ? 
                <Post 
                    id={data.authorId}
                    postId={data._id}
                    name={data.authorName}
                    picture={data.authorPicture}
                    content={data.content}
                    created={data.created}
                    meta={data.meta}
                    ></Post>
                :
                <></>
            }
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center' }}>
                <h2>Replies</h2>
            </div>
            { 
               allReplies.length === 0 ? 
               <div style={{opacity: '50%', fontStyle: "italic", display: 'flex', justifyContent: 'center'}} >No Replies Here</div>
               :
               allReplies.slice(0).map((post, key) => (
                <Reply
                    id={post.authorId}
                    postId={post._id}
                    name={post.authorName}
                    picture={post.authorPicture}
                    content={post.content}
                    created={post.created}
                    meta={post.meta}
                    ></Reply>
               )) 
            }
        </div>
    )
  }
  
  export default ReplyFeed;