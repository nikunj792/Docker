
const express = require("express");
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host : 'redis-server',
  port : 6379
});

client.set('visits', 0)

app.use(express.static("public"));

app.get('/',(req, res)=>{
  // process.exit(0)
   client.get('visits', (err, visits)=>{
    client.set("visits",parseInt(visits)+1)
     res.send(`Number of visit is ${visits}`)});
   
})
app.listen(8080, () => {
  console.log("Running on 8080");
});
