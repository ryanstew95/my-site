const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.get('/home', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port} 😎`);
});


