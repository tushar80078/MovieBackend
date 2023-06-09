const express=require('express');
const app=express();
const errorMiddleware=require("./middlewares/errorMiddleware")
const user=require("./routes/user")
const movies=require("./routes/movies")
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use("/user",user);
app.use("/movie",movies);

app.use(errorMiddleware);

module.exports=app;