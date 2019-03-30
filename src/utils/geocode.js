const request=require("request");

const geocode = (address, callback) => {
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2l2YTA4OSIsImEiOiJjanRzaHg1NTIwd2IzNDRvN2UzenNvc3QwIn0.MtM2W877wV0jYCIxe1n-hQ'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect the api ")
        }
        else if (response.body.features.length === 0) {
            callback("unable to find location")
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}
module.exports=geocode