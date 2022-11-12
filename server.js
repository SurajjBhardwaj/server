const express=require("express");
const app=express();

app.get("/",function (req,res) {
// var name= prompt("what is your name");   
res.send(" <h1> hello,Sir!</> ");
});

app.get("/contact",function (req,res) {

    res.send("contact me at pandeyyysuraj@gmail.com");
    
});

app.get("/about",function (req,res) {

    res.send("<h1>surajj </h1> <p> <h2>surajj is hardworking and honest.</h2></P>  ");

})


app.listen(3000,function() {
    console.log("server started on port 3000n");

})