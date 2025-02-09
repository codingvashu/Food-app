const express = require('express')
const bodyParser = require('body-parser')
const usercontroller = require("../controllers/usercontroller");
const authMiddleware = require("../middleware/authMiddleware"); // Import authentication middleware
const route = express.Router()
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
route.get('/api/auth/profile', authMiddleware, (req, res)=> {
    usercontroller.getUserProfile(req, res)
})
route.post('/api/auth/register', (req, res)=> {
    usercontroller.registerUser(req, res)
})
route.post('/api/auth/login', (req, res)=> {
    usercontroller.loginUser(req, res)
})
module.exports = route