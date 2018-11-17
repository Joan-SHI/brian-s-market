const express = require('express')
const path = require('path')

const request = require ('superagent')

require ('dotenv').config()
const marketRentUrl = 'https://api.business.govt.nz/services/v1/tenancy-services/market-rent/statistics?period-ending=2018-09&num-months=24&area-definition=urban-area-2016&include-aggregates=false&dwelling-type=House&num-bedrooms=3&area-codes=20'
const token = process.env.AUTH_TOKEN


const userRoutes = require('../routes/users')

const server = express()

// Middleware


server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, './public')))

// Routes

server.get("/stuff", (req,res) => {
//first promise
    request.get(marketRentUrl).set('Authorization', 'Bearer ' + token)

    // the promise which respond to the frist promise
        .then(apiRes => {
            let marketRent = apiRes.body
            console.log('market is :', marketRent)
            res.send(marketRent)
        })

        // res.send("partially working")
})

// export function getMarketRent () {
//     return request.get(marketRentUrl).set('Authorization', 'Bearer ' + token)
//     .then(res => {
//         let marketRent = res.body
//         console.log('market is :', marketRent)
//         return marketRent
//     })
// 






// server.use('/', userRoutes)

module.exports = server
