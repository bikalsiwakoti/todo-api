const express = require('express');
const cors = require('cors');
const todoRoute = require('./routes/todoRoute')
require('dotenv').config();
require('./connection/dbConnection')

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extendend: true }))

///ROUTES
app.use('/api', todoRoute);

app.listen(PORT, () => {
  console.log(`Listening to a PORT ${PORT}`)
})
