// This file handles the boot-up of the server 


// dotenv -> doing this early , the code has access to the env variables 
require('dotenv').config();


const { databaseConnect } = require('./database');
const { app } = require('./server');


// as soon the server starts up the db runs 
app.listen(3000, async () => {
	await databaseConnect();
	console.log("Server running!");
});

