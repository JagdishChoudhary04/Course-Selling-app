const { Router } = require("express")
const userRouter = Router()
const userModel = require("../db")    

    userRouter.post('/login', function (req,res) {
        res.json({
            message: "Login endpoint"
        })
    })

    userRouter.post('/signup', function (req,res){
        res.json({
            message: "Sign Up endpoint"
        })
    })

    userRouter.get('/purchases', function (req,res) {
        res.json({
            message: "Purchase the course"
        })
    })

module.exports = {
    userRouter : userRouter
}