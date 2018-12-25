require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const _isEmpty = require('lodash.isempty')
const { updateFonts, saveFontsToDB } = require('./utilities')
const { Font, Favorite } = require('./models')

const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.GOOGLE_FONTS_KEY}`

app.use(bodyParser.json())
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
    const favoritesFromDB = await Favorite.findAll()
    res.json(favoritesFromDB)
})

app.post('/api/favorites', async (req, res) => {
    const newFavorite = {
        family: req.body.family,
        category: req.body.category,
        url: req.body.url,
        variants: req.body.variants,
    }
    await Favorite.create(newFavorite)
    res.json(newFavorite)
})

app.delete('/api/favorites', async (req, res) => {
    const favorite = await Favorite.findOne({
        where: { family: req.body.family }
    });

    favorite.destroy();
    
    res.json(favorite)
})

app.listen(process.env.PORT, (req, res) => console.log('running on port 8000...'))