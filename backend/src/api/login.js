const { express, OAuth2Client, jwt } = require('../middlewares/packages')
const User = require('../db/models/UserModel')

const router = express.Router()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

// function to generate the user auth token
const generateToken = async (email) => {
  return await jwt.sign({email: email}, process.env.PRIVATE_TOKEN)
}

// route to auth the client
router.post('/auth/google', async (req, res) => {
  const { tokenId } = req.body
  // nothing was sent
  if(!tokenId) {
    // send a error message back to the client
    res.status(400).send(new Error('User not validated'))
  }
  // verify the client token
  client.verifyIdToken({idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID}).then(async (res, error) => {
    // invalid token
    if(error) {
      res.status(400).send(new Error('User not validated'))
    }
    // extract user data
    return res.payload
  })
  .then(async (payload) => {
    const {email_verified, name, email} = payload
    // if the email is verified
    if(email_verified) {
      // check if the user in already in the database
      await User.findOne({email: email}).exec(async (err, user) => {
        // some error occured
        if(err) {
          return new Error("Something went wrong")
        }
        // no error checking the database
        else {
          // new user, add the new user and generate auth token
          if(!user) {
            // create a new user instance
            const newUser = new User({
              name: name, 
              email: email,
              join_date: new Date()
            })
            // save the new user in the database
            await newUser.save()
            console.log('New User Added')
            const token = await generateToken(email)
            // send back the auth token
            res.cookie('Token',token, { maxAge: 900000, httpOnly: true })
            res.send('token added')
          }
          // old user, generate auth token
          else {
            console.log(`${name} Logged In`)
            const token = await generateToken(user.email)
            // send back the auth token
            res.cookie('Token',token, { maxAge: 900000, httpOnly: true })
            res.send('token added')
          }
        }

      })
    }
  })
  .catch((error) => {
    res.status(400).send(error)
  })
})

module.exports = router