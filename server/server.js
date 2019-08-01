const express= require('express');
const app= express();
const port=3000;

const path= require('path');


var server= app.listen(port,()=>console.log(`listning on port ${port}`));

// server.timeout= 60 * 4 * 1000;

//app.use(express.static(path.join(__dirname,'build')));

app.get('/hi',(req,res)=> res.send(`hello word`).json);

app.get('/cecId',(req,res)=>{
    console.log('in cedID');
    console.log(req);
});
/*
app.get('/',function(req,res){
    console.log("__dirname"+__dirname);
    res.sendFile(path.join(__dirname,'dist', 'cpdm-service/index.html'));
});
*/

//NODE_TLS_REJECT_UNAUTHORIZED=0 yarn install
//https://github.com/nodejs/node/issues/19359