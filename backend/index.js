// npm modules
const { express, volleyball, cors, helmet } = require('./src/middlewares/packages')
const app = express();

// MongoDB instance
const { db } = require('./src/db/dbConfig')

// routes
const api = require('./src/api/api')
const login = require('./src/api/login')

// middlewares
app.use(cors())
app.use(volleyball)
app.use(express.json())
app.use(helmet())

// routes
app.use('/api', api)
app.use('/login', login)

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`)
})