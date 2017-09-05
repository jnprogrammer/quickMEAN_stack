var express = require('express');
var app = express();

app.get('/',function(request, response){
    //response.send("Hey again world I know this is boiler plate");
    response.send("\nHey again world I know this is MEAN CRYPTO ON Ruite");
    
});

app.get('/blocks',function(req,res){
    var blocks =['fixed','moveable','rotate'];
    res.send(blocks);
});

app.get('/blocks2',function(req,res){
    var blocks = '<ul><li>Filxed</li><li>Moveable</li></ul>';
    res.send(blocks);
});

app.get('/blocks2',function(req,res){
    var blocks = '<ul><li>Filxed</li><li>Moveable</li></ul>';
    res.send(blocks);
});

app.get('/blocks23',function(req,res){
    var blocks = '<ul><li>Filxed</li><li>Moveable</li></ul>';
    res.redirect(301,"/parts");
});

app.listen(3001,function(){
    console.log("Listening for MEAN stacks");
}); 