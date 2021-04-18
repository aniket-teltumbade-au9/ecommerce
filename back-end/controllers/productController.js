const ProductModel = require("../models/productModel");
const UserModel = require("../models/UserModel");

exports.productCreate = (req, res) => {
  const email = req.email;
  const {
    name,
    price,
    quantity,
    brand,
    category
  } = req.body;
  const imagepath = `http://${req.headers.host}/images/${req.file.filename}`;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin" || doc.type === "Vendor") {
        ProductModel.create({
          name,
          image: imagepath,
          price,
          quantity,
          brand,
          category,
          user: doc.name
        }, (cdocErr, cdoc) => {
          if (cdocErr) {
            res.send({ err: 'Something went wrong!' })
          }
          else {
            res.send({ msg: "product created successfully!" })
          }
        })
      }
      else {
        res.send({ err: "You are not authorized." })
      }
    }
  })
}
exports.productList = (req, res) => {
  const email = req.email
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else if (doc.type === "Vendor") {
      ProductModel.find({ user: doc.name }, (allerr, alldocs) => {
        res.send(alldocs)
      })
    }
    else {
      ProductModel.find({ status: true }, (allerr, alldocs) => {
        res.send(alldocs)
      })
    }
  })
}
exports.productActivation = (req, res) => {
  const email = req.email;
  UserModel.findOne({ email }, (docerr, doc) => {
    if (docerr) {
      res.send({ err: 'Something went wrong!' })
    }
    else {
      if (doc.type === "Admin" || doc.type === "Vendor") {
        ProductModel.findOneAndUpdate({ name: req.body.name }, { status: req.body.status }, (updocErr, upDoc) => {
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