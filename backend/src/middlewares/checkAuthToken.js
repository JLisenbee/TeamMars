const { jwt } = require('./packages')

const checkAuthToken = (req, res, next) => {
  // if no token provided
  if(!req.cookies.Token) {
    res.status(403).send(new Error('Invalid or Expired Token'))
  }

  else{
    // verify token
    jwt.verify(req.cookies.Token, process.env.PRIVATE_TOKEN, (error, decoded) => {
      // invalid token
      if(error) {
        res.status(403).send(new Error('Invalid or Expired Token'))
      }
      // valid token
      else{
        req.userEmail = decoded.email
        next()
      }
    })
  }
}

module.exports = { checkAuthToken }