require('dotenv').config()

const express=require("express");
const app = express();

const dupdata = 
[
	{
		color: "red",
		value: "#f00"
	},
    // {
    //     "name":"prince",
    //     "rooll":"2021ug2008",
    //     "id":15
    // },
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

app.get('/', (req,res) => {
     res.send('defining homepage')
})

app.get('/apnapage', (req,res) => {
    res.send('<h1>apna wala page open hoga</h1>')
})

app.use('/apna',(req, res, next) => {
    // console.log('middleware use ho rha hai')
    
    console.log('Time:', Date.now())
    next()
    
  })

app.get('/aboutyou', (req,res) => {
    // res.json( {jsonformat: 'something blew up'})
    // res.status(500).json({ error: 'message' })
    res.links({
        next: 'https://github.com/Priyanshushekhar77/backendpractice'
        // last: 'http://api.example.com/users?page=5'
      })
})

app.get('/api/github',(req,res)=>{
    res.json(dupdata)

})

app.get('/sendpath',(req,res) => {
    res.status(404).sendFile('C:\Users\Priyanshu\Desktop\project\teaching\image.jpg')
})

//console me ayega
app.listen(process.env.PORT,(req,res) => {
    console.log(`app listen at port ${process.env.PORT}`)
})