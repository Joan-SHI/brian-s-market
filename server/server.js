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

server.get("/areaInfo", (req,res) => {

     console.log("sending to MBIE");
    let suburb = req.query.suburb;

//first promise
    request.get(createApiCallUrl(suburb)).set('Authorization', 'Bearer ' + token)

    // the promise which respond to the frist promise
        .then(apiRes => {
            let marketRent = apiRes.body
            console.log("Response from Mbie")
            res.send(marketRent)
        })

        // res.send("partially working")
})


function createApiCallUrl(suburb){

    let url = "https://api.business.govt.nz/services/v1/tenancy-services/market-rent/statistics";

    let periodEnding = "period-ending=2018-06";
    url += "?"+periodEnding;

    let numMonths = "num-months=24"
    url += "&"+numMonths;
    
    let areaDefinition = "area-definition=AU2016"
    url += "&" + areaDefinition
    
    let includeAggregates = "include-aggregates=false"
    url += "&" + includeAggregates
    
    let stats = "statistics=med"
    url += "&" + stats
    
    let dwelling = "dwelling-type=House"
    url += "&" + dwelling
    
    let bedrooms = "num-bedrooms=3"
    url += "&" + bedrooms

    let area = "area-labels=" + suburb;
    url += "&" + area

    // console.log("the request being sent is "+url)

    return url;
}


//https://api.business.govt.nz/services/v1/tenancy-services/market-rent/statistics?period-ending=2018-06&num-months=24&area-definition=AU2016&include-aggregates=false&dwelling-type=House&num-bedrooms=3&area-codes=574401


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
