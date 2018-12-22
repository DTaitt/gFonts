require('dotenv').config()
const express = require('express')
const app = express()
const request = require('request')
const _isEmpty = require('lodash.isempty')
const { updateFonts, saveFontsToDB } = require('./utilities')
const { Font } = require('./models')

const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.GOOGLE_FONTS_KEY}`

app.get('/', (req, res) => res.send('home'))

app.get('/api/fonts', async (req, res) => {
    const fontsFromDB = await Font.findAll()
    if(_isEmpty(fontsFromDB)) {
        request(url, (error, response, requestedFonts) => {
            const updatedFonts = updateFonts(requestedFonts)
            saveFontsToDB(updatedFonts)
            error ? res.status(500).send(error) : res.json(updatedFonts)
        })
    } else {
        res.json(fontsFromDB)
    }
})

app.get('/api/favorites', async (req, res) => {
    res.json(fonts)
})

app.listen(process.env.PORT, (req, res) => console.log('running on port 8000...'))