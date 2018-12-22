require('dotenv').config()
const express = require('express')
const app = express()
const request = require('request')

const { updateFonts } = require('./utilities')

const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.GOOGLE_FONTS_KEY}`

app.get('/', (req, res) => res.send('home'))

app.get('/api/fonts', (req, res) => {
    request(url, (error, response, body) => {
        const updatedFonts = updateFonts(body)
        error ? res.status(500).send(error) : res.send(updatedFonts)
    })
})

app.listen(process.env.PORT, (req, res) => console.log('running on port 8000...'))