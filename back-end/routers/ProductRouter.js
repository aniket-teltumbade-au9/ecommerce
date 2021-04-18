const ProductRouter = require('express').Router()

const { productCreate, productList, productActivation } = require('../controllers/productController');
const authVerify = require('../functions/authVerify');
const upload = require('../functions/upload');

ProductRouter.post('/create', [upload.single('image'), authVerify], productCreate)
ProductRouter.get('/all', authVerify, productList)
ProductRouter.post('/activation', authVerify, productActivation)

module.exports = ProductRouter