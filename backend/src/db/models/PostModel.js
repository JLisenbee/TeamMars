const { mongoose } = require('../../middlewares/packages')

const postSchema = new mongoose.Schema({
  isArchived: {
    type: Boolean,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  authorEmail: {
    type: String,
    required: true,
  },
  authorPicture: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  meta:  {
    comments: [],
    repost: [],
    like: [],
    dislike: [], 
  },
  created: {
    type: Date,
    required: true
  }
})

const postModel = mongoose.model('Posts', postSchema)

module.exports = postModel