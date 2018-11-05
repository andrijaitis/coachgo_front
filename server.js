//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/couchgo'));

// app.use(express.static('C:\\Users\\Vidas\\Desktop\\coachgo_front\\dist\\couchgo'));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/couchgo/index.html'));

// res.sendFile(path.join('C:\\Users\\Vidas\\Desktop\\coachgo_front\\dist\\couchgo\\index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// app.listen(process.env.PORT || 4444);

console.log('bitconect!');