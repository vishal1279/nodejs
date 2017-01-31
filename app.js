var express = require('express');
var app = express();

var port = process.env.PORT;


app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index',{ 
		list:['first val', 'second val', 'third val'],
		nav:['Services','Portfolio','About',"Team",'Contact','NewThings']
	});
});

/*
app.get('/abc', function(req,res){
	res.send('hii abc');
});
*/// Set port
app.set('port',(process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('server started on port'+app.get('port'));
});
