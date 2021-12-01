// npm modules
const { express, volleyball, cors, helmet, cookieParser } = require('./src/middlewares/packages')
const { checkAuthToken } = require('./src/middlewares/checkAuthToken')
const app = express();

// socket
const {socketConnection} = require('./src/api/socket')
const server = require('http').Server(app);
const io = require('socket.io')(server, {cors: {origin: "http://localhost:3000"}})

// socket.io functions for Group chats
socketConnection(io)

// MongoDB instance
const { db } = require('./src/db/dbConfig')

// routes
const api = require('./src/api/api')
const login = require('./src/api/login')

// middlewares
app.use(cors({
  origin:'http://localhost:3000', 
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}))
app.use(volleyball)
app.use(express.json())
app.use(helmet())
app.use(cookieParser())

// routes
app.use('/login', login)
// middleware to check auth token
app.use((req, res, next) => checkAuthToken(req, res, next))
app.use('/api', api)

server.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`)
})