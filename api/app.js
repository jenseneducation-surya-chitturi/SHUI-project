const express = require('express')
const app = express()
const cors = require('cors')

const userRoute = require('./routes/users')
const streamRoute = require("./routes/streams");


app.use(cors());
app.use(express.json())

app.use('/', userRoute)
app.use("/api", streamRoute);



app.listen(5000, () => console.log("Server started"))