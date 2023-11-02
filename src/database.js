const mongoose = require('mongoose');

/**
 * Connect or create & connect to a database.
 * @date 10/31/2023 - 8:20:07 PM
 * @author BigfootDS
 */

async function databaseConnect(){
    try{
        console.log("Connecting to:\n" + process.env.DB_URI);
        // DB connection in the local data base with the url -> 'mongodb://localhost:27017/CatDB'
        await mongoose.connect('mongodb://localhost:27017/CatDB');
        console.log("Database connected");
    } catch(error){
 		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
        }
}

module.exports = {
	databaseConnect
}

// /**
//  * Connect or create & connect to a database.
//  * @date 10/31/2023 - 8:20:07 PM
//  * @author BigfootDS
//  */
// // async function databaseConnect(){
// // 	try {
// // 		// DB connection can take some time, eg. if DB is in the cloud 
// // 		await mongoose.connect(process.env.DB_URI);
// // 		console.log("Database connected");
// // 	} catch (error) {
// // 		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
// // 	}
// // }

// module.exports = {
// 	databaseConnect
// }