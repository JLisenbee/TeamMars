import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Events = () => {

  useEffect(() => {
    console.log('events')
  })

  return(
    <>
      <div>
        <Header />
        <h1>Events</h1>
      </div>
    </>
  )
}

export default Events;