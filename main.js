require('dotenv').config();

const app=require('./app');
const connect=require("./db/mongoDB")
const DBURL=process.env.DBURL;
const port=process.env.PORT;

connect(DBURL).then(data=>{
    app.listen(port,()=>{
        console.log("DataBase Connectd \nServer Started On Port : ",port)
    })
}).catch(err=>{
    console.log("Error while connecting to database",err);
})
