// npm modules
const { express, volleyball, cors, helmet } = require('./src/middlewares/packages')
const app = express();

// routes
const api = require('./src/api/api')

// middlewares
app.use(cors())
app.use(volleyball)
app.use(helmet())

// routes
app.use('/api', api)

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`)
})