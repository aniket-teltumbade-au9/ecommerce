const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BrandSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  status: { type: Boolean, default: false },
}, { timestamps: true })

const BrandModel = mongoose.model('Brand', BrandSchema)

module.exports = BrandModel