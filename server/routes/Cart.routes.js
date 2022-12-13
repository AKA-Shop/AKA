const express =require('express'); 
const {saveCart,get,put,deleteCart} = require('../controller/cart')
const router = express.Router();
router.post('/add', saveCart);
router.get('/getall', get);
router.put('/:id', put)
router.delete('/:id', deleteCart)
module.exports = router;

