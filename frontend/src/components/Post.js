import { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import axios from 'axios'
import Pic from './Pic'
import variable from '../variable'

// Header for pages, contains the logo with link to home
// As well as a search bar and various buttons
const Post = ({id, postId, name, picture, content, created, meta}) => {
    
    const userId = useStoreState((store) => store.userId)

    const [isReposted, setisReposted] = useState(meta.repost.includes(userId) ? true : false)
    const [isLiked, setisLiked] = useState(meta.like.includes(userId) ? true : false)
    const [isDisliked, setisDisliked] = useState(meta.dislike.includes(userId) ? true : false)
    const [likeCount, setlikeCount] = useState(meta.like.length)
    const [dislikeCount, setdislikeCount] = useState(meta.dislike.length)
    const [repostCount, setrepostCount] = useState(meta.repost.length)

    useEffect(() => {
        setisLiked(meta.like.includes(userId) ? true : false)
        setisDisliked(meta.dislike.includes(userId) ? true : false)  
        setlikeCount(meta.like.length)
        setdislikeCount(meta.dislike.length)
        setisReposted(meta.repost.includes(userId) ? true : false)
        setrepostCount(meta.repost.length)
    }, [meta, userId])

    const handleLike = () => {
        if(!isLiked) {
            
            const data = {
                postId: postId,
                userId: userId
            }

            axios({
                method: "POST",
                withCredentials: true,
                url: variable.LIKE_POST,
                data: data
              }).then((res) => {
                //   update all the variables
                meta = res.data.meta
                setisLiked(meta.like.includes(userId) ? true : false)
                setisDisliked(meta.dislike.includes(userId) ? true : false)
                setlikeCount(meta.like.length)
                setdislikeCount(meta.dislike.length)
            })
        }
    }

    const handleDislike = () => {
        if(!isDisliked) {
            
            const data = {
                postId: postId,
                userId: userId
            }

            axios({
                method: "POST",
                withCredentials: true,
                url: variable.DISLIKE_POST,
                data: data
              }).then((res) => {
                //   update all the variables
                meta = res.data.meta
                setisLiked(meta.like.includes(userId) ? true : false)
                setisDisliked(meta.dislike.includes(userId) ? true : false)  
                setlikeCount(meta.like.length)
                setdislikeCount(meta.dislike.length)
            })
        }
    }

    const handleRepost = () => {
        const data = {
            postId: postId,
            userId: userId
        }
        if(!isReposted) {
            axios({
                method: "POST",
                withCredentials: true,
                url: variable.RE_POST,
                data: data
              }).then((res) => {
                //   update all the variables
                meta = res.data.meta
                setisLiked(meta.like.includes(userId) ? true : false)
                setisDisliked(meta.dislike.includes(userId) ? true : false)  
                setlikeCount(meta.like.length)
                setdislikeCount(meta.dislike.length)
                setisReposted(meta.repost.includes(userId) ? true : false)
                setrepostCount(meta.repost.length)
            })
        }

        else {
            axios({
                method: "POST",
                withCredentials: true,
                url: variable.REMOVE_RE_POST,
                data: data
              }).then((res) => {
                //   update all the variables
                meta = res.data.meta
                setisLiked(meta.like.includes(userId) ? true : false)
                setisDisliked(meta.dislike.includes(userId) ? true : false)  
                setlikeCount(meta.like.length)
                setdislikeCount(meta.dislike.length)
                setisReposted(meta.repost.includes(userId) ? true : false)
                setrepostCount(meta.repost.length)
            })
        }
    }

    return(
        <div className = "box" style={{ display: 'flex', justifyContent: 'flex-start', alignItems:'flex-start' }}>
            <div>
                <Pic picture={picture}></Pic>
            </div>
            <div style={{ margin: '0px', padding: '0px', width: '80%' }}>

                {/* author info */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', fontSize: '2vmin'}}>
                    <p style={{ margin: '0px', padding: '0 0 0 10px', fontWeight: 'bold' }}>{name}</p>
                    <p style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>@{id}</p>  
                    <span style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>&#183;</span>
                    <p style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>{created}</p>
                </div>

                {/* actual post */}
                <p style={{ margin: '0px', padding: '0.5px 0 0 10px', fontSize: '2vmin' }}>{content}</p>
                
                {/* Interaction bar */}
                <div style={{ padding: '7px 0 7px 10px', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    {/* message icon */}
                    <div style={{opacity: '60%', cursor: 'pointer', padding: '10px 0 0 0', display: 'flex', alignItems: 'center'}}>
                        <svg viewBox="0 0 24 24" width="2vmin" height="2vmin" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span style={{ padding: '0 0 0 5px', fontSize: '2vmin' }}> {meta.comments.length} </span>
                    </div>
                    {/* re-post icon */}
                    <div onClick={handleRepost} style={{opacity: `${isReposted ? '100': '60'}%`, cursor: 'pointer', padding: '10px 0 0 0', display: 'flex', alignItems: 'center'}}>
                        <svg viewBox="0 0 24 24" width="2vmin" height="2vmin" stroke={isReposted ? 'rgb(0, 186, 124)': 'white'} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                        <span style={{ color: `${isReposted ? 'rgb(0, 186, 124)': 'white'}`, padding: '0 0 0 5px', fontSize: '2vmin' }}> {repostCount} </span>
                    </div>
                    {/* like icon */}
                    <div onClick={handleLike} style={{opacity: `${isLiked ? '100': '60'}%`, cursor: 'pointer', padding: '10px 0 0 0', display: 'flex', alignItems: 'center'}}>
                        <svg viewBox="0 0 24 24" width="2vmin" height="2vmin" stroke="currentColor" stroke-width="2" fill={isLiked ? 'white' : 'none'} stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                        <span style={{ padding: '0 0 0 5px', fontSize: '2vmin' }}> {likeCount} </span>
                    </div>
                    {/* dislike icon */}
                    <div onClick={handleDislike} style={{opacity:  `${isDisliked ? '100': '60'}%`, cursor: 'pointer', padding: '10px 0 0 0', display: 'flex', alignItems: 'center'}}>
                        <svg viewBox="0 0 24 24" width="2vmin" height="2vmin" stroke="currentColor" stroke-width="2" fill={isDisliked ? 'white' : 'none'} stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                        <span style={{ padding: '0 0 0 5px', fontSize: '2vmin' }}> {dislikeCount} </span>
                    </div>
                    {/* setting icon */}
                    <div style={{opacity: '60%',  cursor: 'pointer', padding: '10px 0 0 0', display: 'flex', alignItems: 'center'}}>
                       <svg viewBox="0 0 24 24" width="2vmin" height="2vmin" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Post;