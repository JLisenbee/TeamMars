import PostModel from './PostModel'

const PostButton = ({isModelOpen, setisModelOpen}) => {
  return(
    <>
      <button onClick={() => {setisModelOpen(true)}} style={{ 
        width: '65px', 
        height: '35px', 
        background: '#F4B400', 
        fontWeight: 'bold', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px' }}>Post</button>
      <PostModel isModelOpen={isModelOpen} setisModelOpen={setisModelOpen}/>
    </>
    )
}

export default PostButton