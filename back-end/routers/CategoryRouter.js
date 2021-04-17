const CategoryRouter = require('express').Router()

const { categoryCreate, catList, catActivation } = require('../controllers/categoryController');
const authVerify = require('../functions/authVerify');
const upload = require('../functions/upload');

CategoryRouter.post('/create', [upload.single('image'), authVerify], categoryCreate)
CategoryRouter.get('/all', authVerify, catList)
CategoryRouter.post('/activation', authVerify, catActivation)

module.exports = CategoryRouter