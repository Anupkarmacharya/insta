// Grab all the package 

var express =  require('express');
var app = express();
var instagram = require('instagram-node').instagram();


//
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


instagram.use({
	client_id: 'e9d5ec79a2044c109551b242da8a161c',
	client_secret:'5f57f1609be14e43a12faa507bd15905'
});

app.get('/', function(req,res){
	instagram.media_popular(function(err, medias, remaining, limit){
		// res.end(medias);
		// res.render('pages/index',{ grams: medias });
		console.log('err');
		console.log('medias', medias);
		console.log('remaining', remaining);
		console.log('limit', limit);
		console.log('medias',medias);
	});
});


app.listen(8080, function(err){
	if(err){
		console.log("Error");

	} else {
		console.log("Listening on port 8080");
	}
});