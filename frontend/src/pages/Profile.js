import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Profile = () => {

  useEffect(() => {
    console.log('profile')
  })

  return(
    <>
      <div>
        <Header />
        <h1>Profile</h1>
      </div>
    </>
  )
}

export default Profile;