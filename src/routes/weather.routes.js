const express = require ('express');
const router = express.Router();
const weatherController = require('../controllers/weather.controller');

router.post("/weathers", weatherController.createWeather)

module.exports = router