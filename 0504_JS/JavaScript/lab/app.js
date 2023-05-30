var express=require("express");
var app=express();
app.use(express.static("./public"));
app.listen(3000);

app.get("/hello/:who",function(req,res){
    res.send("hello!"+req.params.who);
})