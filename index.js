const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send("Main Page")
})

app.post('/user/login', function (req,res) {
    res.json({
        message: "Login endpoint"
    })
})

app.post('user/signup', function (req,res){
    res.json({
        message: "Sign Up endpoint"
    })
})

app.post('course/purchase', function (req,res) {
    res.send("Buy Courses")
})

app.get('/courses', function (req,res) {
    res.send("All Courses")
})

app.get('user/purchases', function (req,res) {
    res.send("My Purchased Courses")
})

app.listen(port, () => {
    console.log('Example port listening on port', port)
})
