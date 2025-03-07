const express = require("express");
const app = express();

let port= 8080;



// app.use((req, res) =>{
//     console.log("request received")
//     res.send("this is basic response")
// })


app.get("/", (req, res) =>{
    res.send("this is root")

})
app.get("/apply", (req, res) =>{
    res.send("this is apple")

})

app.get("*", (req, res) =>{
    res.send("404")

})



app.listen(port, () =>{
    console.log(`app listening port ${port}`)

})

