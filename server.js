'use strict'

const express = require('express')

const server = express();

server.use(express.static('./public'));

const PORT = process.env.PORT || 3030;

server.listen(PORT,()=>{
  console.log(`my port is ${PORT}`)

})


server.get('/test',(req,res)=>{
  res.send('you are in the test page')
})
