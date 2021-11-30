// lib
const { express } = require('../middlewares/packages')
const router = express.Router();

// code lib
const User = require('../db/models/UserModel')
const Post = require('../db/models/PostModel')

router.get('/', (req, res) => {
  res.send('User Validated')
})

router.get('/getUserData', async (req, res) => {
  await User.findOne({email: req.userEmail}).exec(async (err, user) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      //  send back user data
      res.send(user)
    }
  })
})

router.post('/creatPost', async (req, res) => {
 const { userName, userPicture, userEmail, userId, postText, creationDate } = req.body
 const newPost = new Post({
    authorName: userName,
    authorId: userId,
    authorEmail: userEmail,
    authorPicture: userPicture,
    content: postText,
    created: creationDate 
  })

  // save the new user in the database
  await newPost.save()
  console.log('New Post added by ' + userEmail)
  res.send('Post Created')
})

router.get('/getAllPost', async(req, res) => {
  await Post.find().exec(async (err, posts) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      //  send back user data
      res.send(posts)
    }
  })
})

module.exports = router