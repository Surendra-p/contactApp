var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['Ctlist','signin']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function (req,res){
	console.log('I received a get request')

	db.Ctlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});

	/*person1 = {
		name: 'abc',
		email: 'abc@gmail.com',
		number: '111'
	};

	person2 = {
		name: 'def',
		email: 'def@gmail.com',
		number: '222'  
	};

	person3 = {
		name: 'ghi',
		email: 'ghi@gmail..com',
		number: '333'
	} ;

	var contactlist = [person1, person2, person3];
	res.json(contactlist);*/
});

app.post('/addtlist', function (req,res){
	console.log(req.body);
	// You'll create your note here.
    res.send('Hello')
	db.Ctlist.insert(req.body, function(err,doc){
		res.json(doc);
	});
});

app.delete('/deletelist/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.Ctlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	});
});

app.get('/editlist/:id', function (req,res) {
	var id = req.params.id;
	console.log(id);
	db.Ctlist.findOne({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.put('/updatelist/:id', function (req,res){
	var id = req.params.id;
	console.log(req.body.name);
	db.Ctlist.findAndModify({query: {_id:mongojs.ObjectId(id)},
		update:{$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function (err,doc) {
			res.json(doc);
		});
});

app.get('/randome', function (req,res){
	console.log('I received a get request')

	db.signin.find(function(res,docs){
		console.log(docs);
		res.json(docs);
	});
	
});

app.post('/addlist', function (req,res){
	console.log(req.body);
	db.signin.insert(req.body,function(err,docs){
		res.json(docs);
	});
});
app.listen(3000);
console.log("server running on port 3000");