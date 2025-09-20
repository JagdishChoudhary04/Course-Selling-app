const { Router } = require("express")
const adminRouter = Router()

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

    adminRouter.use(adminMiddleware())

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