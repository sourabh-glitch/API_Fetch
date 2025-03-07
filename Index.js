const express = require("express");
const app = express();
const path= require("path")

let port= 8080;



// app.use((req, res) =>{
//     console.log("request received")
//     res.send("this is basic response")
// })

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use(express.urlencoded({extended: true}))  
app.use(express.json())

// this help to parse the post request

app.get("/", (req, res) =>{
    res.render("home.ejs")

})
app.get("/rolldice", (req, res) =>{
    let diceVale = Math.floor(Math.random() *6 ) +1;
    res.render("rolldice.ejs", {diceVale})

})

app.get("/ig/:username", (req, res) =>{
    let [username] = req.params
    const instadata = require("./data.json")
    const data = instadata[username]
    console.log(instadata)
    if(data){
        res.render("instagram.ejs", {data})

    }else{

    }
    

})

// app.get("/", (req, res) =>{
//     res.send("this is root")

// })
// app.get("/apply", (req, res) =>{
//     res.send("this is apple")

// })

app.get("*", (req, res) =>{
    res.send("404")

})



app.listen(port, () =>{
    console.log(`app listening port ${port}`)

})

