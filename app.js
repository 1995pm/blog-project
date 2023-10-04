const express = require('express')
const app =express() //call method
const port=3000  //localhost:3000 (use in url to run)
const web =require('./routes/web')


app.set('view engine', 'ejs')  //html css
app.use(express.static('public')) //html css link

app.use('/',web) // '/' it will find to run on server




//server create
app.listen(port, () => {
    console.log(`server start localhost:${port} `)
    
})