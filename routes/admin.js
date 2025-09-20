const { Router } = require("express")
const adminRouter = Router()
const adminModel = require("../db")

    adminRouter.post("/login", function(req, res){
        res.json({
            message: "Login Endpoint"
        })
    })

    adminRouter.post("/signup", function(req, res){
        res.json({
            message: " Signup Endpoint"
        })
    })

    adminRouter.post("/course/create", function(req, res){
        res.json({
            message: "Create a course"
        })
    })

    adminRouter.put("/course/create", function(req, res){
        res.json({
            message: "Update the course"
        })
    })

    adminRouter.get("/courses", function(req,res){
        res.json({
            message: "All courses Preview"
        })
    })

module.exports = {
    adminRouter: adminRouter
}