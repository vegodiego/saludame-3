const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());

app.get('/', (req, res) => {
	res.render("index");
});

app.post('/hello', (req, res) => {
	res.render("hello", {name: req.body.name});  
});

app.listen(3000, () => console.log('Listening on port 3000!'));

