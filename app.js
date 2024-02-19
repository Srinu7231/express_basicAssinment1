const express = require('express')
const http = require('http')
const app = express()
const userRoute = require('./Routes/user')
const directory = require('./path') 
const path = require('path')

// we were using user route here 
app.use(userRoute)
app.use(express.static(path.join(directory,'JSCODES')))
app.use((res,req,next)=>{
    console.log(res.statusCode)
    req.status(404).sendFile(path.join(directory,'Views','404page.html'))
})

const server = http.createServer(app)
app.listen(3000)