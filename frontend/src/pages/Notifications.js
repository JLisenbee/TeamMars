import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Notifications = () => {

  useEffect(() => {
    console.log('notifications')
  })

  return(
    <>
      <div>
        <Header />
        <h1>Notifications</h1>
      </div>
    </>
  )
}

export default Notifications;