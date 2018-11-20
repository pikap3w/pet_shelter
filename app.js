const express = require('express'),
		app = express(),
		path = require('path'),
		bodyParser = require('body-parser'),
    port = 8000;

require('./server/config/mongoose.js');

app.use(express.static(path.join(__dirname, '/public/dist/Pets')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/routes.js')(app);

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
