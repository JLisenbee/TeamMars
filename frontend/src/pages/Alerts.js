import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Alerts = () => {

  useEffect(() => {
    console.log('alerts')
  })

  return(
    <>
      <div>
        <Header />
        <h1>Alerts</h1>
      </div>
    </>
  )
}

export default Alerts;