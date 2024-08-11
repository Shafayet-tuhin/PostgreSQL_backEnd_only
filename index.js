const express = require('express')
const app = express()
const port = process.env.PORT ||5000 

const userRouter = require('./Router/userRouter')
const foodRouter = require('./Router/foodRouter')
const orderRouter = require('./Router/orderRouter')

const pool = require('./Database Connection/db')
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Server is running')
})

app.use('/users' , userRouter)
app.use('/fastfoods', foodRouter)
app.use('/orders' , orderRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})