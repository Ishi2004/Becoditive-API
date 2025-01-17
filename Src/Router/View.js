const express = require('express')
const route = express.Router()

const viewController = require('../Controllers/View')

route
    .route('/')
    .get(viewController.home)

route
    .route('/sitemap.xml')
    .get(function(req, res) {
        res.sendFile('sitemap.xml', { root: '.'});
    });

module.exports = route;