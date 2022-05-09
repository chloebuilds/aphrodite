import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true, maxLength: 300 },
  benefits: { type: String, required: true },
  keyIngredients: { type: String, required: true },
  productImage: { type: String, required: true },
  createdAt: { type: Date, default: Date.now}
})

productSchema.plugin(mongooseUniqueValidator)

const Product = mongoose.model('Product', productSchema)

export default Product