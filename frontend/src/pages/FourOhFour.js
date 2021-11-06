import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const FourOhFour = () => {

  useEffect(() => {
    console.log('404')
  })

  return(
    <>
      <div>
        <Header />
      </div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge"></div>
        <div className = "bodyObject bodyCenter">
          <h1>404 - Page Not Found <br/><br/>
            The page you are looking for cannot be found at this time.
            Please check that the URL is correct, or <span>click </span> 
            <Link className = "goldLink" to="/home"> here</Link> to return home.
          </h1>
        </div>
        <div className = "bodyObject bodyRightEdge"></div>
      </div>
    </>
  )
}

export default FourOhFour;