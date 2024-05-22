const app = require("./app")
require('dotenv').config()
const connectDatabase = require("./database/database")



//Database Configurations
connectDatabase()



 const server = app.listen(process.env.PORT || 3008,()=>{
    console.log(`the server is running of${process.env.PORT}`)
})

process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`shutting down the server due to un-Handel promisee Rejection `)
    server.close(()=>{
        process.exit(1);
    })
})