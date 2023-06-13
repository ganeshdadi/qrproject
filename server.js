const express = require("express")
const path = require('path')
const app = express()

var isQRCodeReadComplete = false

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('index')
    res.render('index', {text : 'message'})
})

app.get('/startpage', (req, res) => {
    console.log('startpage')
    res.render('startpage', {text : 'message'})
})

app.get('/startpagen', (req, res) => {
    console.log('startpagen')
    res.render('startpagen', {text : 'message'})
})

app.get('/qrcodepage', (req, res) => {
    console.log('qrcodepage')
    res.redirect('qrcode.html')
})

app.get('/qrcodepagenew', (req, res) => {
    console.log('qrcodepage')
    isQRCodeReadComplete = false
    res.render('qrcode')
})

app.post('/qrcodepagen', (req, res) => {
    console.log('qrcodepagen')
    isQRCodeReadComplete = false
    res.render('qrcoden')
})

app.post('/qrcodepagenew', (req, res) => {
    console.log('qrcodepagenew')
    isQRCodeReadComplete = false
    res.render('qrcode')
})

app.get('/paymentdone', (req, res) => {
    console.log('paymentdone')
    res.render('paymentdone')
})

app.get('/paymentdonen', (req, res) => {
    console.log('paymentdonen')
    res.render('paymentdonen')
})

app.get('/qrcodereaddone', (req, res) => {
    console.log('qrcodereaddone')
    isQRCodeReadComplete = true
    res.setHeader("Content-Type" , "application/json")
    res.send(JSON.stringify({status : "done"}))
})

app.get('/qrcodereadstatus', (req, res) => {
    console.log('qrcodereadstatus')
    var response = {qrcodereadstatus : isQRCodeReadComplete};

    // refer: https://stackoverflow.com/questions/29581830/how-to-handle-a-get-request-with-node-js-express
    res.setHeader("Content-Type" , "application/json")
    res.send(JSON.stringify(response))
})

app.listen(3000)
