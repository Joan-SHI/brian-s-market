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


