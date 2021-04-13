const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')



exports.register = (req, res, next) => {
  const { name, email, bio, type, password } = req.body
  const imagepath = `http://${req.headers.host}/public/${req.file.filename}`
  let hashpass = bcrypt.hashSync(password, 8)
  UserModel.countDocuments((err, count) => {
    res.send(count)
  })
  /* UserModel.create({ name, email, bio, type, password: hashpass, image: imagepath }, (recordErr, record) => {
    if (recordErr) {
      res.send({ err: 'Something went wrong!' })
    } else {
      res.send({ msg: 'Registration Successful!' })
    }
  }) */
}

exports.login = (req, res) => {
  const { email, password } = req.body
  UserModel.findOne({ email }, (erecordErr, erecord) => {
    if (erecord.password) {
      let comppass = bcrypt.compareSync(password, erecord.password)
      if (comppass) {
        let token = jwt.sign({
          email: erecord.email
        }, process.env.AUTH_PASS_KEY)
        res.send({ msg: 'Sign In Successful!', authToken: token })
      }
      else {
        res.send({ err: 'Password doesn\'t match!' })
      }
    }
    else {
      res.send({ err: 'Email not registered' })
    }
  })
}
exports.profile = (req, res) => {
  const email = req.email
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      res.send({ msg: doc })
    }
  })
}