var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

eventRouter.route('/')
	.get(function(req,res){
		res.send('Hello event');
});

eventRouter.route('/event')
	.get(function(req,res){
		res.send('Hello single event');
});

app.use('/events',eventRouter);

app.get('/', function(req,res){
	res.render('index',{ 
		list:['first val', 'second val', 'third val'],
		nav:[
			{link:'Services', Text:'Services'},
			{link:'Portfolio', Text:'Portfolio'},
			{link:'About', Text:'About'},
			{link:"Team", Text:'Team'},
			{link:'Contact',Text:'Contact'},
			{link:'Events',Text:'Events'}
		]
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
