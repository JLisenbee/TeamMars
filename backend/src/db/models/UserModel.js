const { mongoose } = require('../../middlewares/packages')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  join_date: {
    type: Date,
    required: true
  }
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel