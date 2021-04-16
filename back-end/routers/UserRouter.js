const { register, login, profile, list } = require('../controllers/UserController');

const UserRouter = require('express').Router();

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const authVerify = require('../functions/authVerify');
const DIR = './public/images/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage
});

UserRouter.post('/register', upload.single('image'), register)
UserRouter.post('/login', login)
UserRouter.get('/profile', authVerify, profile)
UserRouter.get('/all', authVerify, list)

module.exports = UserRouter