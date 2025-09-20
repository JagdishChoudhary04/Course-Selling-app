const mongoose = require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email: {unique: true, type: String},
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
    email: {unique: true, type: String},
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageurl: String,
    courseId: ObjectId 
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
}) 

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}