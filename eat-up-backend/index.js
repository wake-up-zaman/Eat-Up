const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//routes
const restaurantRoute=require("./src/routes/restaurantRoute.js")
const foodRoute=require("./src/routes/foodRoute.js")
const reviewRoute=require("./src/routes/reviewRoute.js")
const userRoute=require("./src/routes/userRoute.js")
const smsRoute=require("./src/routes/smsRoute.js")


//mongoose
require('dotenv').config();
const mongoose = require('mongoose');
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoose Eat Up");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected !")
})

mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected !")
})


//middleWires
const cors = require('cors');
app.use(cors());
app.use(express.json());
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use("/restaurant",restaurantRoute);
app.use("/food",foodRoute);
app.use("/review",reviewRoute);
app.use("/user",userRoute);
app.use("/sms",smsRoute);

//errorHandling
app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500
  const errorMessage=err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})


app.get('/', (req, res) => {
  res.send('Hello We are from Eat Up')
})

app.listen(port, () => {
  connect();
  console.log(`Eat Up listening on port ${port}`)
})