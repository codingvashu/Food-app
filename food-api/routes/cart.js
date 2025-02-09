const bodyParser = require('body-parser')
const route = express.Router()
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
route.post('/api/cart/add', (req, res)=> {
    cartcontroller.cartadd(req, res)
})
route.delete('/api/cart/remove/:itemId', (req, res)=> {
    cartcontroller.cartdelete(req, res)
})
route.get('/api/cart', (req, res)=> {
    cartcontroller.cart(req, res)
})
route.post('/api/orders', (req, res)=> {
    cartcontroller.orders(req, res)
})
route.get('/api/orders/:id', (req, res)=> {
    cartcontroller.ordersid(req, res)
})
module.exports = route