const mongoose = require('mongoose');

// save mongoose.Schema as the variable Schema 
const Schema = mongoose.Schema;


// function that create a new Schema with two properties -> username and password 
const UserSchema = new Schema({

    username: {
		type: String,
        // if it doesn't have "required: true", it will be false for default 
		required: true,
        unique: true
	},
    password: {
		type: String,
		required: true,
        // by default this needs to be false and it's good to very clear and specify by typing it
		unique: false
	}
});

// use pre save hook 
UserSchema.pre(
	'save',
	async function (next) {
		console.log("About to save a user to the DB!");
		next();
	}
)


// const ModelName = mongoose.model('Name that appears in mongosh or Cloud Atlas GUI', SchemaThatModelIsBasedOn);
const User = mongoose.model('User', UserSchema);


module.export = { 
    User
}
