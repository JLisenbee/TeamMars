const PostModel = ({isModelOpen, setisModelOpen}) => {
  return(
    <> 
      <div onClick={() => {setisModelOpen(false)}} style={{
        display: `${isModelOpen ? '': 'none'}`,
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: `100vw`, 
        height: `100vh`, 
        background: 'rgba(0, 0, 0, 0.7)' }}>
      </div>
      <div style={{ 
        display: `${isModelOpen ? '': 'none'}`, 
        position: 'absolute',
        width: '600px', 
        height: '350px', 
        background: '#242C37',
        borderRadius: '4px',
        marginTop: '50px',
        marginLeft: 'auto', 
        marginRight: 'auto'}}>This is a model</div>
    </>
  )
}

export default PostModel