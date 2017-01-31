var express = require('express');
var app = express();

var port = process.env.PORT;


app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

/*app.get('/', function(req,res){
	res.send('hii');
});

app.get('/abc', function(req,res){
	res.send('hii abc');
});
*/// Set port
app.set('port',(process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('server started on port'+app.get('port'));
});
