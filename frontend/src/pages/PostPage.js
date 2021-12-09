import { useEffect, useState } from 'react'
import Header from '../components/Header'
import FriendList from '../components/FriendList'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import SideBar from '../components/SideBar'
import ReplyFeed from '../components/ReplyFeed'
import axios from 'axios'
import variable from '../variable'
import Post from '../components/Post'

const PostPage = () => {

  let url = useRouteMatch();
  const address = window.location.pathname;
  const currId = address.substring(address.lastIndexOf('/'));
  const [postData, setpostData] = useState([])

  useEffect(() => {
    console.log("POST")
    axios({
      method: "POST",
      withCredentials: true,
      url: variable.GET_ALL_REPLIES,
      data: {
          postId: currId.substring(1)
      }
      }).then((res) => {
        setpostData(res.data)
        console.log(res.data)
    })
  }, [])

  return(
    <>
      <div>
        <Header/>
      </div>
      <div className = "menuContainer">
        <div className = "bodyObject bodyLeftEdge"><FriendList /></div>
        <div className = "bodyObject bodyCenter">
          <Switch>
            <Route exact path={`${url.path}`}>
              <h1>Error - We couldn't find the post you're looking for</h1>
            </Route>
            <Route path={`${url.path}/`}>
              { postData.length === 0 ? 
                <></>
                :
                <ReplyFeed data={postData}/>
              }
            </Route>
          </Switch>
          </div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}

export default PostPage;