const express = require('express')
require('./db/connect')
const student_router = require('./routers/students')
const app = express()
const port = 3000

app.use(express.json())
app.use('/api/students',student_router)

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))