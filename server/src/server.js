const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' })

const app = require('./app')

const PORT = process.env.SERVER_PORT || 8080

const DB = process.env.MONGODB_URL.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful!')
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`)
  })

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
