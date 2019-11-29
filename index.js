/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 5000,
	url = '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true,
}));

app.use((_,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
console.log('Connected');

app.get('/', (_ ,res) => {
	console.log('this is working');
	res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port, url, e => {
	if(e) throw e;
	else {
		console.warn('Running at \n'+server.address().address + '\t' +server.address().port);
        
	}
});