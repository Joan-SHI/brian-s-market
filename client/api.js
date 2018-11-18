import request from 'superagent'


export function getMarketRent (suburbName) {
    // console.log("send request")
    return request.get('/areaInfo?suburb='+suburbName)
        .then( res => {

            // console.log("got request answer")
            let marketRent = res.body
             console.log('market is :', marketRent)
            return marketRent 
        })
}


//require ('dotenv').config()

// const marketRentUrl = 'https://api.business.govt.nz/services/v1/tenancy-services/market-rent/statistics?period-ending=2018-09&num-months=24&area-definition=urban-area-2016&include-aggregates=false&dwelling-type=House&num-bedrooms=3&area-codes=20'
// const token = process.env.AUTH_TOKEN

// export function getMarketRent () {
//     return request.get(marketRentUrl).set('Authorization', 'Bearer ' + token)
//     .then(res => {
//         let marketRent = res.body
//         console.log('market is :', marketRent)
//         return marketRent
//     })
// }