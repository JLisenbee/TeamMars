import { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import Pic from './Pic'
import axios from 'axios'
import variable from '../variable'

const ReplyModel = ({isModelOpen, setisModelOpen,id, postId, name, picture, content, created, meta}) => {
  
  const [replyText, setreplyText] = useState('')

  const userName = useStoreState((state) => state.userName)
  const userEmail = useStoreState((state) => state.userEmail)
  const userPicture = useStoreState((state) => state.userPicture)
  const userId = useStoreState((state) => state.userId)

  const handleReply = () => {

    const data = { 
      postId: postId,
      authorName: userName,
      authorId: userId,
      authorEmail: userEmail,
      authorPicture: userPicture,
      content: replyText,
      created: new Date()
    }

    axios({
      method: "POST",
      withCredentials: true,
      url: variable.REPLY_POST,
      data: data
    }).then((res) => {
      console.log(res)
      setisModelOpen(false)
      window.location.reload()
    })
   
  }

  return(
    <> 
      <div onClick={() => {
            setisModelOpen(false) 
            document.body.style.overflow = ''
            }} style={{
        display: `${isModelOpen ? '': 'none'}`,
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: `100vw`, 
        height: `100vh`, 
        background: 'rgba(0, 0, 0, 0.7)',
        overflow: 'hidden'}}>
      </div>
      <div style={{ display: `${isModelOpen ? '': 'none'}`, position: 'absolute',top: 30,left: 0, right: 0, width: '600px', height: '300px', background: '#242C37',borderRadius: '6px',marginTop: '50px',marginLeft: 'auto', marginRight: 'auto', overflow: 'hidden', opacity: '100%', zIndex: '1000'}}>
        {/* author post */}
        <div style={{ display: 'flex', padding: '10px'}}>
          <div>
              <Pic picture={picture}></Pic>
          </div>
          <div style={{ margin: '0px', padding: '0px', width: '100%' }}>

              {/* author info */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', fontSize: '2vmin'}}>
                  <p style={{ margin: '0px', padding: '0 0 0 10px', fontWeight: 'bold' }}>{name}</p>
                  <p style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>@{id}</p>  
                  <span style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>&#183;</span>
                  <p style={{ margin: '0px', padding: '0 0 0 10px', opacity: '60%', fontSize: '1.7vmin' }}>{created}</p>
              </div>

              {/* actual post */}
              <p style={{ margin: '0px', padding: '0.5px 0 0 10px', fontSize: '2vmin' }}>{content}</p>
              
              {/* reply message */}
              <p style={{ margin: '0px', padding: '20px 0 0 10px', fontSize: '2vmin', opacity: '60%' }}> Replying to {name} </p>
          </div>
        </div>

        {/* replier */}
        <div style={{ display: 'flex', padding: '10px'}}>
          <div>
              <Pic picture={userPicture}></Pic>
          </div>
          {/* reply text box */}
          <div style={{ margin: '0px', padding: '0px', width: '80%'}}>
            <textarea value={replyText} onChange={(e) => {setreplyText(e.target.value)}} placeholder="Your reply" style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderStyle: 'none',
                    background: '#242C37', 
                    color: 'white', 
                    padding: '10px', 
                    outline: 'none',
                    resize: 'none',
                    fontSize:  '17px' }} type="text"/>
          </div>
        </div>

        {/* lower section */}
        <div style={{ height: '13vmin', display: 'flex', padding: '10px'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
                  <button disabled={replyText === '' ? true:false} type="submit" onClick={handleReply} style={{ 
                    width: '65px', 
                    height: '35px', 
                    background: '#F4B400', 
                    fontWeight: 'bold', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    opacity: `${replyText === '' ? 50:100}%`,
                    cursor:  `${replyText === '' ? 'not-allowed':'pointer'}`
                    }}>Reply</button>
                </div>
        </div>
      </div>
    </>
  )
}

export default ReplyModel