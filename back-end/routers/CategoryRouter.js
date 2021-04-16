const CategoryRouter = require('express').Router()

const { categoryCreate } = require('../controllers/categoryController');
const authVerify = require('../functions/authVerify');
const upload = require('../functions/upload');

CategoryRouter.post('/create', [upload.single('image'), authVerify], categoryCreate)

module.exports = CategoryRouter