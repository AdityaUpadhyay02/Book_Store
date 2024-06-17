import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
// const port = 3000
const app = express()
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
dotenv.config();

//connect to mongodb
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("error : ",error);
}


//defining route
app.use("/book",bookRoute);
app.listen( PORT, () => {
  console.log(`Example app listening on port ${ PORT}`)
})