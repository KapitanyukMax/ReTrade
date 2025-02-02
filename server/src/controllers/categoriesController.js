const Category = require('../models/categories')

const createCategory = async (req, res) => {
  const category = await Category.create(req.body)
  res.status(201).json({
    status: 'success',
    data: {
      category
    }
  })
}

module.exports = {
  createCategory
}
