const { mongoose } = require('../middlewares/packages')

const db = mongoose
db.connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, async (error) => {
    if(error) {
      console.log('Unable to connect to MongoDB')
      console.log(error)
    }
    else {
      console.log('Connected to MongoDB')
    }
  })

module.exports = { db }