import { useStoreState } from 'easy-peasy'

import Header from '../components/Header'
import FriendList from '../components/FriendList'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

const Home = () => {

  const userPicture = useStoreState((state) => state.userPicture)
  console.log('Picture: ' + userPicture)
  return(
    <>
      <div>
        <Header userPicture={userPicture}/>
      </div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge"><FriendList /></div>
        <div className = "bodyObject bodyCenter"><Feed /></div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}

export default Home;