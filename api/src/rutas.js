const { default: axios } = require('axios');
const {Router} = require('express');
const router = Router();
const server = require("express").Router();
require('dotenv').config();
const {NOMADA_KEY, MOVIE_KEY} = process.env;

console.log(NOMADA_KEY, MOVIE_KEY)

/* server.post('/' , (req, res, next) => {
    console.log(req)
    .then( res.status(200).send('Salio peola, bro') )
    .catch( next() )
}) */

module.exports = router