const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  user: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: Boolean, default: false },
}, { timestamps: true })

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel