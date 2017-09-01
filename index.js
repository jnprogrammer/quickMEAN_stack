var express = require('express');
var app = express();

var logger = require('./logger'); // the ./ means its a local module and not an npm or yarn module
app.use(logger);

// app.get('/',function(req, res){
//     //res.send("Hey again world I know this is boiler plate");
//     res.send("\nHey again world I know this is MEAN CRYPTO ON Ruite");
    
// });

// app.get('/test2',function(req,res){
// })
var blocks ={'Fixed':'Fastened in place',
             'Moveable':'Capable of being moved',
             'Rotating':'Moving in a circle around its centr'};
             
app.use(express.static('public'));
 
app.param('name',function(req,res,next){
    var name = req.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

    req.blockName = block;
    next();
}) 

app.get('/blocks/:name',function(req,res){
   var name = req.params.name;
   var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
   var description = blocks[block];
    if(!description){
       res.status(404).json('No description found for ' + req.params.name)  
    }else{
       res.json(description);
    } 

    if(req.query.limit >= 0){
      res.json(blocks.slice(0,req.query.limit));
    }else{
      res.json(Object.keys(blocks));
    }
});

app.get('/locations/:name',function(req,res){
    var location = locations[req.blockName];
})
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

app.use(function(req, res, next){
    if (req.path === "/cities"){
      next();
    } else {
      res.status(404).json("Path reqed does not exist");
    }
  });
  
  app.get('/cities', function(req, res){
    var cities = ['Caspiana', 'Indigo', 'Paradise'];
    res.json(cities);
  });

app.listen(3001,function(){
    console.log("Listening for MEAN stacks");
}); 