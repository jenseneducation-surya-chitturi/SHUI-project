const express = require('express')
const app = express()
const cors = require('cors')

const userRoute = require('./routes/users')
 const streamsRoute = require('./routes/streams')

app.use(cors());
app.use(express.json())

app.use('/', userRoute)
 app.use('/api/streams' , streamsRoute) 



app.listen(5000, () => console.log("Server started"))