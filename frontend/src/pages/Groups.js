import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Groups = () => {

  useEffect(() => {
    console.log('groups')
  })

  return(
    <>
      <div>
        <Header />
        <h1>Groups</h1>
      </div>
    </>
  )
}

export default Groups;