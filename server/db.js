// const mongoose = require("mongoose");

// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };

const mongoose =require('mongoose')
// const colors=require('colors')

const connectDB= async ()=>{
   try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log(`Connected to DB ${mongoose.connection.host}.bgGreen.white`);
   }
   catch(err){
     console.log(Error `${err}.bgRed.white`);
   }
}
module.exports=connectDB;
