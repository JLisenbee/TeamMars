const { express } = require('../middlewares/packages')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hi')
})

module.exports = router