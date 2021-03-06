const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/restaurants',function(req,res){
  res.sendFile(path.join(__dirname+'/restaurants.html'));
});

router.get('/data',function(req,res){
    res.sendFile(path.join(__dirname+'/data.json'));
  });

app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Check port 8080');
