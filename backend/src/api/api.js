// lib
const { express } = require('../middlewares/packages')
const router = express.Router();

// code lib
const User = require('../db/models/UserModel')

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

module.exports = router