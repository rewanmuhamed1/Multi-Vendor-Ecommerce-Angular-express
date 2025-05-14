const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { dbConnect } = require('./‎utiles/db')


app.use(cors({
    origin : ['http://localhost:4200'],// because cors securty error 
    credentials: true
}))
app.use(bodyParser.json()) // use that beacuse data returned in authController print undefind
app.use(cookieParser())

app.use('/api',require('./‎routes/authRoutes'))
app.use('/api',require('./‎routes/dasboard/categoryRoutes'))



const port = process.env.PORT
dbConnect()

app.listen(port , () => console.log(`server is running on port ${port}`) )