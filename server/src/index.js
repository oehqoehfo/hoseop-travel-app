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
  let resArray=[];
  request({
    uri:'https://maps.googleapis.com/maps/api/place/textsearch/json',
    qs:{
      query:"point of interest in"+cityname,
      key:apiKey
    }
  },(err,request,body)=>{
    const object = JSON.parse(body);
    let photo;
    let placeObject={
      placeName:'',
      photo:''
    }
    for(let i=0;i<object.results.length;i++){
      placeObject['placeName']=object.results[i].name;
      placeObject['photo'] =object.results[i].photos[0]['photo_reference'];
      
      //getImageOfPlace(photo);
      resArray[i]=Object.assign({},placeObject);
    }
    res.send(resArray);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

async function getImageOfPlace(place){
  try{
    const response = await fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+place+'&key='+apiKey);
    //const json = await response.json();
    console.log(response);
  }catch(e){
    console.log(e);
  }
}