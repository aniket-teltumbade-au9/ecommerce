const { register, login, profile } = require('../controllers/UserController');

const UserRouter = require('express').Router();

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const authVerify = require('../functions/authVerify');
const DIR = './public/';

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
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log(file)
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

UserRouter.post('/register', upload.single('image'), register)
UserRouter.post('/login', login)
UserRouter.get('/profile', authVerify, profile)

module.exports = UserRouter