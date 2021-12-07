import Header from '../components/Header'
import FriendList from '../components/FriendList'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import SideBar from '../components/SideBar'
import ReplyFeed from '../components/ReplyFeed'
import Post from '../components/Post'

const PostPage = () => {

  let url = useRouteMatch();
  const address = window.location.pathname;
  const currId = address.substring(address.lastIndexOf('/'));

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
              cur = {currId}
              <ReplyFeed />
            </Route>
          </Switch>
          </div>
        <div className = "bodyObject bodyRightEdge"><SideBar /></div>
      </div>
    </>
  )
}

export default PostPage;