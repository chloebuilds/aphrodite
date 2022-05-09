import express from 'express'

import { showProducts, addProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/products.js'
// express gives us a router that we can attach routes and methods to

const router = express.Router()

// ** ROUTES **
router.route('/products')
  .get(showProducts)
  .get(addProduct)

  router.route('/products/:id')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct)

  // router is exported to
  export default router