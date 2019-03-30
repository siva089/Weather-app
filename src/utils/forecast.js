const request =require('request');
const forecast=(latitude,longitude,callback)=>{
let url = `https://api.darksky.net/forecast/ca19ed2c514aa590ccb6386085d6ddb2/${latitude},${longitude}`;
request({url:url,json:true},(error,response)=>{
    if(error){
        callback("Chek your internet connection")
    }
    else if(response.body.error){
        callback("Enter correct latitude and longitude")
    }
    else{
        callback(undefined,{
            temperature:response.body.currently.temperature
        })
    }
})

}
// const url = "https://api.darksky.net/forecast/ca19ed2c514aa590ccb6386085d6ddb2/37.8267,-122.4233";

module.exports=forecast