const express = require('express')
const bodyParser = require('body-parser')
const route = express.Router()
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
route.get('/api/restaurants', (req, res)=> {
    restaurantcontroller.restaurants(req, res)
})
route.get('/api/restaurants/:id', (req, res)=> {
    restaurantcontroller.restaurantid(req, res)
})
route.get('/api/restaurants/:id/menu', (req, res)=> {
    restaurantcontroller.restaurantmenu(req, res)
})
module.exports = route