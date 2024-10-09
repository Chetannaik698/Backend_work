const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});

app.use((req, res) => {
    // console.log(req); 
    console.log("request received")
    // res.send("This is a basic response")
    res.send({
        fruit: "apple",
        color: "red",
    });
})

app.get("/",(req,res) => {
    res.send("hello iam root")
})
app.get("/apple",(req,res) => {
    res.send("You contacted apple path")
})
app.get("/orange",(req,res) => {
    res.send("You contacted orange path")
})
app.get("*",(req,res) => {
    res.send("Thsi path does not exisits")
})
app.post("/",(req,res) => {
    res.send("You sent post request")
})

app.get("/:username/:id",(req,res) => {
    let {username, id} = req.params
    let htmlstr = `<h1>Welcome to ${username} page</h1>`
    res.send(htmlstr)
})

app.get("/search", (req,res) => {
    let {q} = req.query
    res.send(`The requested querys is: ${q}`)
})