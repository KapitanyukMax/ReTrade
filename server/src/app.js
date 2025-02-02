const express = require('express')
const morgan = require('morgan')
const categoriesRouter = require('./routes/categories')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/categories', categoriesRouter)

module.exports = app
