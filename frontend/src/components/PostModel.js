import { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import ProfilePic from './ProfilePic'
import {ReactComponent as Logo2} from '../logos/discord.svg'
import {ReactComponent as Logo3} from '../logos/github.svg'
import axios from 'axios'
import variable from '../variable'

const PostModel = ({isModelOpen, setisModelOpen}) => {
  
  const [postText, setpostText] = useState('')

  const userName = useStoreState((state) => state.userName)
  const userEmail = useStoreState((state) => state.userEmail)
  const userPicture = useStoreState((state) => state.userPicture)
  const userId = useStoreState((state) => state.userId)

  const handlePost = () => {

    const data = {
      userName: userName,
      userEmail: userEmail,
      userPicture: userPicture,
      userId: userId,
      postText: postText,
      creationDate: new Date()
    }

    axios({
      method: "POST",
      withCredentials: true,
      url: variable.CREATE_POST,
      data: data
    }).then((res) => {
      console.log(res)
    })
   
    setisModelOpen(false)
    window.location.reload()
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
        <div style={{ 
          display: `${isModelOpen ? '': 'none'}`, 
          position: 'absolute',
          top: 30,
          left: 0,
          right: 0,
          width: '600px', 
          height: '250px', 
          background: '#242C37',
          borderRadius: '6px',
          marginTop: '50px',
          marginLeft: 'auto', 
          marginRight: 'auto', 
          overflow: 'hidden', 
          opacity: '100%', 
          zIndex: '1000'}}>
        {/* upper half */}
          <div style={{ display: 'flex', width: '95%', height: '90%', paddingTop: '20px'}}>
            <ProfilePic userPicture={userPicture}/>
            <div style={{ width: '100%', height: '100%', display:'flex', flexDirection:'column'}}>
              <textarea value={postText} onChange={(e) => {setpostText(e.target.value)}} placeholder="What's going on?" style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderStyle: 'none',
                  background: '#242C37', 
                  color: 'white', 
                  padding: '10px', 
                  outline: 'none',
                  resize: 'none',
                  fontSize:  '17px' }} type="text"/>
              {/* divider */}
              <div style={{ width: '100%', height: '2px', background: 'white', opacity: '30%'}}></div>
              {/* lower half */}
              <div  style={{width: '100%', height: '40%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ padding: '0 0 0 10px', display:'flex', justifyContent: 'space-between', width: '30%' }}>
                    <Logo3/>
                    <Logo2/>
                    <Logo3/>
                    <Logo2/>
                  </div>
                  <button disabled={postText === '' ? true:false} type="submit" onClick={handlePost} style={{ 
                    width: '65px', 
                    height: '35px', 
                    background: '#F4B400', 
                    fontWeight: 'bold', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    opacity: `${postText === '' ? 50:100}%`,
                    cursor:  `${postText === '' ? 'not-allowed':'pointer'}`
                    }}>Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PostModel