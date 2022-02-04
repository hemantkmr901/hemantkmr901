const express = require('express')
const app = express()
const path = require('path')


const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send();
})

app.listen(8000, () => {
    console.log('Server listening');
})