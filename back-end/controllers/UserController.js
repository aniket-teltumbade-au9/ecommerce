const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')



exports.register = (req, res) => {
  const { name, email, bio, type, password } = req.body
  const imagepath = `http://${req.headers.host}/images/${req.file.filename}`
  const hashpass = bcrypt.hashSync(password, 8)
  UserModel.countDocuments({ type: "Admin" }, (err, count) => {
    if (count === 0) {

      UserModel.create({ name, email, bio, type: "Admin", password: hashpass, image: imagepath, status: true }, (recordErr, record) => {
        if (recordErr) {
          res.send({ err: 'Something went wrong!' })
        } else {
          res.send({ msg: 'Registration Successful!' })
        }
      })
    }
    else {
      if (type === "Vendor") {
        UserModel.create({ name, email, bio, type, password: hashpass, image: imagepath }, (recordErr, record) => {
          if (recordErr) {
            res.send({ err: 'Something went wrong!' })
          } else {
            res.send({ msg: 'Registration Successful!' })
          }
        })
      }
      else {
        UserModel.create({ name, email, bio, type, password: hashpass, image: imagepath, status: true }, (recordErr, record) => {
          if (recordErr) {
            res.send({ err: 'Something went wrong!' })
          } else {
            res.send({ msg: 'Registration Successful!' })
          }
        })
      }
    }
  })
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
        if (erecord.status === true) {
          res.send({ msg: 'Sign In Successful!', authToken: token })
        }
        else {
          res.send({ err: 'Email is not activated yet', authToken: null })
        }
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

exports.list = (req, res) => {
  const email = req.email
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        UserModel.find((allerr, alldocs) => {
          res.send(alldocs.filter((el) => email != el.email))
        })
      }
      else {
        res.send({ err: "You are not authorized to see this page." })
      }
    }
  })
}
exports.activation = (req, res) => {
  const email = req.email;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        UserModel.findOneAndUpdate({ email: req.body.email }, { status: req.body.status }, (updocErr, upDoc) => {
          if (updocErr) {
            res.send({ err: 'Something went wrong!' })
          }
          else {
            res.send({ msg: "User Status changed successfully!" })
          }
        })
      }
      else {
        res.send({ err: "You are not authorized to see this page." })
      }
    }
  })
}