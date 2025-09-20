const express = require('express')
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const app = express()
const port = 3000

app.use("/user",userRouter)
app.use("/course",courseRouter)

app.listen(3000)