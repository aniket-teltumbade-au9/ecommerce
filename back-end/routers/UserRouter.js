const { register, login, profile, list, activation } = require('../controllers/UserController');

const UserRouter = require('express').Router();

const authVerify = require('../functions/authVerify');
const upload = require('../functions/upload');

UserRouter.post('/register', upload.single('image'), register)
UserRouter.post('/login', login)
UserRouter.get('/profile', authVerify, profile)
UserRouter.get('/all', authVerify, list)
UserRouter.post('/activation', authVerify, activation)

module.exports = UserRouter