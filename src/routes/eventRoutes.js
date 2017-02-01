var express = require('express');

var router = express.Router();
var eventRouter = express.Router();

var eventData = [ {
					name:'Event 1',
					description:'The first event',
					date:'31-jan-2017',
					time:'05:11 PM',
					duration:'2 hours',
					location:{
						streetAddr:'101 main st.',
						city:'west delhi',
						state:'delhi',
						zip:'110026',
						lon:'0',
						lat:'0'
					},
					capacity:100
				},
				{
					name:'Event 2',
					description:'The Second event',
					date:'1-Feb-2017',
					time:'05:11 PM',
					duration:'2 hours',
					location:{
						streetAddr:'101 main st.',
						city:'west delhi',
						state:'delhi',
						zip:'110026',
						lon:'0',
						lat:'0'
					},
					capacity:100
				},
				{
					name:'Event 2',
					description:'The third event',
					date:'2-Feb-2017',
					time:'05:11 PM',
					duration:'2 hours',
					location:{
						streetAddr:'101 main st.',
						city:'west delhi',
						state:'delhi',
						zip:'110026',
						lon:'0',
						lat:'0'
					},
					capacity:100
				},
				{
					name:'Event 4',
					description:'The fourth event',
					date:'3-Feb-2017',
					time:'05:11 PM',
					duration:'2 hours',
					location:{
						streetAddr:'101 main st.',
						city:'west delhi',
						state:'delhi',
						zip:'110026',
						lon:'0',
						lat:'0'
					},
					capacity:100
				}
			];

eventRouter.route('/')
	.get(function(req,res){
		res.render('events',{ 
		list:['first event', 'second event', 'third event'],
		nav:[
			{link:'Services', Text:'Services'},
			{link:'Portfolio', Text:'Portfolio'},
			{link:'About', Text:'About'},
			{link:"Team", Text:'Team'},
			{link:'Contact',Text:'Contact'},
			{link:'Events',Text:'Events'}
		],
		events:eventData
	});
});


eventRouter.route('/:id')
	.get(function(req,res){
		var id = req.params.id;
		res.render('event',{ 
		list:['first event', 'second event', 'third event'],
		nav:[
			{link:'Services', Text:'Services'},
			{link:'Portfolio', Text:'Portfolio'},
			{link:'About', Text:'About'},
			{link:"Team", Text:'Team'},
			{link:'Contact',Text:'Contact'},
			{link:'Events',Text:'Events'}
		],
		events:eventData[id]
	});
});

module.exports = eventRouter;

