const BrandModel = require("../models/brandModel");
const UserModel = require("../models/UserModel");

exports.brandCreate = (req, res) => {
  const email = req.email;
  const { name } = req.body;
  const imagepath = `http://${req.headers.host}/images/${req.file.filename}`;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        BrandModel.create({ name, image: imagepath }, (cdocErr, cdoc) => {
          if (cdocErr) {
            res.send({ err: 'Something went wrong!' })
          }
          else {
            res.send({ msg: "brand created successfully!" })
          }
        })
      }
      else {
        res.send({ err: "You are not authorized." })
      }
    }
  })
}
exports.brandList = (req, res) => {
  const email = req.email
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        BrandModel.find((allerr, alldocs) => {
          res.send(alldocs)
        })
      }
      else if (doc.type === "Vendor") {
        BrandModel.find((allerr, alldocs) => {
          res.send(alldocs.filter(el => el.status === true).map(el => el.name))
        })
      }
      else {
        res.send({ err: "You are not authorized to see this page." })
      }
    }
  })
}
exports.brandActivation = (req, res) => {
  const email = req.email;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        BrandModel.findOneAndUpdate({ name: req.body.name }, { status: req.body.status }, (updocErr, upDoc) => {
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