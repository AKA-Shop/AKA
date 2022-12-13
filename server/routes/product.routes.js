const express =require('express'); 
const {saveProduct,get,put,deleteProduct,findOneProduct} = require('../controller/products')
const router = express.Router();
router.post('/add', saveProduct);
router.get('/getall', get);
router.put('/:id', put)
router.delete('/:id', deleteProduct)
router.get('/:name',findOneProduct)
module.exports = router;

