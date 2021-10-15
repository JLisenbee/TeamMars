import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {

  useEffect(() => {
    console.log('home')
  })

  return(
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default Home;