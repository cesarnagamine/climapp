const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {

})

app.listen(port, () => {
    console.log('Server started!')
})