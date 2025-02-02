const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the category.'],
    unique: true
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

module.exports = mongoose.model('Category', categorySchema)
