const express = require("express")

var app = express() 

app.get("/", function(req, res){
    res.send("Hello World")
})

var server = app.listen(8000, function(){
    var host = server.address().address 
    var port = server.address().port 

    console.log("Express is listening at the port http://%s:%s", host, port)
})