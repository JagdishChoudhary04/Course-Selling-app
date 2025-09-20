const { Router } = require("express")
const courseRouter = Router()

    courseRouter.post('purchase', function (req,res) {
        res.send("Buy Courses")
    })

    courseRouter.get('/preview', function (req,res) {
        res.send("All Courses")
    })

module.exports = {
    courseRouter : courseRouter
}