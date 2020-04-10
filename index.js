// code away!
const express = require('express');

const userRouter = require('./users/userRouter');

const server = express();

const logger = require('./middleware/logger');

const port = 8000;

server.use('/',userRouter);
server.use(logger());

server.listen(port,()=>{
  console.log('Server is running');
});

server.use((err,req,res,next)=>{
   console.log(err);
   res.status(500).json({errorMessage: "oops something went wrong"});
});

module.exports = server;