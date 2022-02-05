const express = require('express')
// const { appendFileSync } = require('fs')
const app = express()
const path = require('path')
const hbs = require('hbs')

const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


app.set("view engine", "hbs")
app.set('views', templatePath)
hbs.registerPartials(partialPath)
app.use(express.static(staticPath))


app.get('/', (req, res) => {
    res.render('index', { channelName: 'Hemant', linkActive: 'none' })
})
app.get('/contact', (req, res) => {
    res.render('contact', { channelName: 'Hemant', linkActive: 'active' })
})
app.get('/gallery', (req, res) => {
    res.render('gallery', { channelName: 'Hemant', linkActive: 'active' })
})

app.get('/single', (req, res) => {
    res.render('single', { channelName: 'Hemant', linkActive: 'active' })
})

// This get function is not working
app.get("/single/*", (req, res) => {
    res.render('404', {errorComment:'Oops.. single page not found!'});
})

app.get('*', (req, res) => {
    res.render('404', {errorComment:'Oops.. page not found!'});
})

app.listen(8000, () => {
    console.log('Server listening');
})
