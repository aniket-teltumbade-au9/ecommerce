const CategoryModel = require("../models/categoryModel");
const UserModel = require("../models/UserModel");

exports.categoryCreate = (req, res) => {
  const email = req.email;
  const { name } = req.body;
  const imagepath = `http://${req.headers.host}/images/${req.file.filename}`;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        CategoryModel.create({ name, image: imagepath }, (cdocErr, cdoc) => {
          if (cdocErr) {
            res.send({ err: 'Something went wrong!' })
          }
          else {
            res.send({ msg: "Category created successfully!" })
          }
        })
      }
      else {
        res.send({ err: "You are not authorized." })
      }
    }
  })
}
exports.catList = (req, res) => {
  const email = req.email
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        CategoryModel.find((allerr, alldocs) => {
          res.send(alldocs)
        })
      }
      else if (doc.type === "Vendor") {
        CategoryModel.find((allerr, alldocs) => {
          res.send(alldocs.filter(el => el.status === true).map(ele => ele.name))
        })
      }
      else {
        res.send({ err: "You are not authorized to see this page." })
      }
    }
  })
}
exports.catActivation = (req, res) => {
  const email = req.email;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin") {
        CategoryModel.findOneAndUpdate({ name: req.body.name }, { status: req.body.status }, (updocErr, upDoc) => {
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