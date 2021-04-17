const BrandRouter = require('express').Router()

const { brandCreate, brandList, brandActivation } = require('../controllers/brandController');
const authVerify = require('../functions/authVerify');
const upload = require('../functions/upload');

BrandRouter.post('/create', [upload.single('image'), authVerify], brandCreate)
BrandRouter.get('/all', authVerify, brandList)
BrandRouter.post('/activation', authVerify, brandActivation)

module.exports = BrandRouter