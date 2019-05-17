const express = require('express')
const app = express()
const controller = require('./controller')

app.use(express.json())





const PORT=4321
app.listen(PORT, () => console.log('Please dont send me home! on 4321'))