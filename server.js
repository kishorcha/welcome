const express = require('express')
const app = express()

app.get("/",function(request,responce){
    responce.send("<h1>Wellcome to my website ")
})

app.get("/contact",function(request,responce){
    responce.send("COntact me at: kishorchavan@gmail.com");
})
app.get("/about",function(request,responce){
    responce.send("<h1>My Name is Kishor<h1/><br> <h2>I am working as ful stack web devoloper in startup company<h2/>");
})
app.get("/hobies",function(request,responce){
    responce.send("eating,coding sleeping");    x
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
});