var db = require("../../database/index");
const fetch = require("node-fetch")
const dotenv = require('dotenv');

dotenv.config()

exports.createWeather = async (req, res) => {
    const { indcident_desc, city, country } = req.body;
    const { rows } = await db.query(
        "INSERT INTO weathers (indcident_desc, city, country) VALUES ($1, $2, $3)",
        [indcident_desc, city, country]
    );

    let url = "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={process.env.API}"
    fetch(url).then((res) => {
        res.json().then((res1) => {
            console.log(res1)
        })
    })

    res.status(201).send({
        message: "Weather added successfully",
        body: {
            weather: { indcident_desc, city, country }
        }
    })
}

