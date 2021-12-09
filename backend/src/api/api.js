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
    isArchived: false,
    authorName: userName,
    authorId: userId,
    authorEmail: userEmail,
    authorPicture: userPicture,
    content: postText,
    meta:  {
      comments: [],
      repost: [],
      like: [],
      dislike: [], 
    },
    created: creationDate 
  })

  // save the new user in the database
  await newPost.save()
  console.log('New Post added by ' + userEmail)
  res.send('Post Created')
})

router.get('/getAllPost', async(req, res) => {
  await Post.find({isArchived: false}).exec(async (err, posts) => {
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

router.post('/likePost', async(req, res) => {
  const { postId, userId } = req.body
  await Post.findOne({_id: postId}).exec(async (err, post) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      post.meta.like.push(userId)
      // if the user disliked as well
      post.meta.dislike = post.meta.dislike.filter((user) => {return user != userId})
      await post.save()
      res.send(post)
    }
  })
})

router.post('/dislikePost', async(req, res) => {
  const { postId, userId } = req.body
  await Post.findOne({_id: postId}).exec(async (err, post) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      post.meta.dislike.push(userId)
      // if the user liked as well
      post.meta.like = post.meta.like.filter((user) => {return user != userId})
      await post.save()
      res.send(post)
    }
  })
})

router.post('/rePost', async(req, res) => {
  const { postId, userId } = req.body
  await Post.findOne({_id: postId}).exec(async (err, post) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      post.meta.repost.push(userId)
      await post.save()
      res.send(post)
    }
  })
})

router.post('/removeRePost', async(req, res) => {
  const { postId, userId } = req.body
  await Post.findOne({_id: postId}).exec(async (err, post) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      post.meta.repost = post.meta.repost.filter((user) => {return user != userId})
      await post.save()
      res.send(post)
    }
  })
})

router.post('/archivePost', async(req, res) => {
  const { postId, userId } = req.body
  await Post.findOne({_id: postId}).exec(async (err, post) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      post.isArchived = true
      await post.save()
      res.send('post archived')
    }
  })
})

router.post('/replyPost', async(req, res) => {
  const { postId, authorName, authorId, authorPicture, authorEmail, created, content } = req.body
  await Post.findOne({_id: postId}).exec(async (err, post) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      const reply = {
        authorName: authorName,
        authorId: authorId,
        authorPicture: authorPicture,
        authorEmail: authorEmail,
        content: content,
        created: created
      }
      post.meta.comments.push(reply)
      await post.save()
      res.send(post)
    }
  })
})

router.get('/getFriends', async(req, res) => {
  await User.find().exec(async (err, users) => {
    // some error occured
    if(err) {
      res.status(500).send(new Error("Something went wrong"))
    }
     // no error checking the database
     else {
      //  send back user data
      res.send(users)
    }
  })
})

module.exports = router