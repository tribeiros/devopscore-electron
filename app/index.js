const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('index');
});

console.log("Tiago Ribeiro - tribeiros@indracompany.com")
app.listen(port, () => console.log(`listening on port ${port}!`))