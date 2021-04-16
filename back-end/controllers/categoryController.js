const CategoryModel = require("../models/categoryModel");

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