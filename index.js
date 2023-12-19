require('dotenv').config()

const express=require("express");
const app = express();


app.get('/', (req,res) => {
     res.send('defining homepage')
})

app.get('/apnapage', (req,res) => {
    res.send('<h1>apna wala page open hoga</h1>')
})

//console me ayega
app.listen(process.env.PORT,(req,res) => {
    console.log(`app listen at port ${process.env.PORT}`)
})