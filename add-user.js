var express=require('express');
var app = express();
var fs = require('fs');
var user = {
    "user4" : {
        "name" : "Hamzh",
        "password" : "abcd@1234",
        "profession" : "eng",
        "id" : 4
    }
};
app.post('/adduser' , function(req,res){
    fs.readFile("./user.json",'utf8',function(err,data){
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end(JSON.stringify(data));
    });
});

app.get('/show' , function(req,res){
    // fs.readFile("./user.json",'utf8',function(err,data){
    //     data = JSON.parse( data );
    //     data["user4"] = user["user4"];
    //     console.log( data );
    //     res.end(JSON.stringify(data));
    // });
    res.sendFile(path.resolve('./add-user.js'));
});
app.get('/' , function(req,res){
    res.end('connected !');
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at : %s - %s",host,port)
});