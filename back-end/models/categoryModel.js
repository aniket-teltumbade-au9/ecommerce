const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  status: { type: Boolean, default: false },
}, { timestamps: true })

const CategoryModel = mongoose.model('Category', CategorySchema)

module.exports = CategoryModel