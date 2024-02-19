const express = require('express')
const router = express.Router()
const path = require('path')
const directory = require('../path')
router.get('/',(req,res,next)=>{
    res.send('<h1>Main root ..........</h1>')
})
router.get('/users',(req,res,next)=>{
    res.sendFile(path.join(directory,'Views','user.html'))
})

module.exports = router;