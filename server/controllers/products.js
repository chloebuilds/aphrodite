import Product from '../models/product.js '


// ? METHOD: GET
// * ENDPOINT: /products
export const showProducts = async (req, res) => {
  const products = await Product.find()
  console.log({ products })
  return res.status(200).json(products)
}

// ? METHOD: POST
// * ENDPOINT: /products
export const addProduct = async (req, res) => {
  const { body: newProduct } = req
  try {
    const productToAdd = await Product.create(newProduct)
    return res.status(200).json(productToAdd)
  } catch(err) {
    console.log('🚨🚨🚨🚨 This is the error: ', err)
    return res.status(400).json(err.name)
  }
}

// ? METHOD: GET
// * ENDPOINT: /product/:id
export const getSingleProduct = async (req, res) => {
  const { productId } = req.params
  try {
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: "Product not found"})
    }
    return res.status(200).json(product)
  } catch (err) {
    console.log('🚨🚨🚨🚨 This is the error: ', err)
    return res.status(400).json({ message: "Something went wrong!"})
  }
}

// ? METHOD: PUT
// * ENDPOINT: /products/:id
export const updateProduct = async (req, res) => {
  const { productId } = req.params
  try {
    const productToUpdate = await Product.findById(productId)
    if(!productToUpdate) {
      return res.status(404).json({ message: "Product not found!"})
    }
    return res.status(200).json(productToUpdate)
  } catch (err) {
    console.log('🚨🚨🚨🚨 This is the error: ', err)
    return res.status(400).json(err)
  }
}

// ? METHOD: DELETE
// * ENDPOINT: /products/:id
export const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    await Product.findByIdAndRemove(id)
    return res.sendStatus(204)
  } catch (err) {
return res.status(500).json(err)
  }
}