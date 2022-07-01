const express = require('express')
const app = express();
const port = 3000;
const cors =require('cors');
const request = require('request');
require('dotenv').config();
const apiKey = process.env.google_place_api_key;
app.use(cors({
  origin:'http://localhost:8080',
  credentials:true
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/city',(req,res)=>{
  const cityname = req.query.name;
  console.log(apiKey);
  let resArray=[];
  request({
    uri:'https://maps.googleapis.com/maps/api/place/textsearch/json',
    qs:{
      query:"point of interest in"+cityname,
      key:apiKey
    }
  },(err,request,body)=>{
    const object = JSON.parse(body);
    console.log("length "+object.results.length);
    let placeObject={
      placeName:''
    }
    for(let i=0;i<object.results.length;i++){
      placeObject['placeName']=object.results[i].name;
      console.log(placeObject);
      resArray[i]=Object.assign({},placeObject);
    }
    //res.send(JSON.parse(resObject));
    console.log(resArray);
    res.send(resArray);
  })//.pipe(resObject);
});
app.get('/test',(req,res)=>{
  console.log("test test");
  res.send("test test");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});