var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
/* this might be a panacea, but it didn't work for me
app.all('*', express.static('public/index.html'));
*/

app.listen(PORT, function() {
    console.log("Express server is up on port " + PORT);
});