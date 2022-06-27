const express = require('express')
const app = express();
const port = 3000;
const cors =require('cors');
app.use(cors({
  origin:'http://localhost:8080',
  credentials:true
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/test',(req,res)=>{
  console.log("test test");
  res.send("test test");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});