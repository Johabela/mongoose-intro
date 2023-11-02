// This file handles the boot-up of the server 


// dotenv -> doing this early , the code has access to the env variables 
require('dotenv').config();


const { app } = require('./server');

app.listen(300, () => {
console.log("server is running");

});