import {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    console.log('home')
  })

  return(
    <>
      <Link className= "goldLink" to="/login">Go to login</Link>
    </>
  )
}

export default Home;