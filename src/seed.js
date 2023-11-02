require('dotenv').config();

const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
const { Cat } = require('./models/CatModel');


databaseConnect().then(async () => {

    // guaranty access to our database 
	console.log("Creating seed data!");

     // set up model of data first step but it was commented out because there is a file called Cat Model with this model 
	
     // const Cat = mongoose.model('Cat', {
	// 	name: String,
	// 	colour: String, 
	// 	breed: String,
	// 	favouritePlacesToSit: [String],
	// 	gender: String,
	// 	age: Number, // integer 
	// 	safeToPet: Boolean,
	// 	weightKg: Number, // float / decimal 
	// 	favouriteToys: [String],
	// 	photos: [String] // URL to some file storage like AWS S3, Google Cloud, Azure, whatever 
	// });

    // create a new object with properties 
	let newLina = new Cat({
		name: "Lina",
		colour: "orange",
		breed:"meowth",
		favouritePlacesToSit: ["keyboard","Zach's shoulder", "clean kitchen counters", "cardboard boxes"],
		gender: "female",
		age: 2,
		safeToPet: true,
		weightKg: 5.5,
		favouriteToys: ["Zach's keyboard", "coffee mugs", "string"],
		photos: ["http://google.com"]
	})

	await newLina.save().then(() => {
		console.log(`${newLina.name} is in the DB`);
	});

}).then(async () => {
	//imaginary dbDisconnect() 
	// await dbDisconnect();
})