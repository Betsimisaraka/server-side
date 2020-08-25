const nunjucks = require('nunjucks');

console.log('Greetings from Node and index.js! 🙃');

// We need Express to act as our application server
const express = require('express');

// Let's test that Express is working as expected:
// console.log(express);
// Let's create a new App
const app = express();

nunjucks.configure({
  autoescape: true,
  express: app
});

// We want express to run on this port
const port = 3000;

// app.get('/', (request, response) => {
//   console.log('Request: o/');
//   console.log('Request: /|');
//   console.log('Request: /|');

//   response.sendFile(__dirname + '/index.html');
// });
app.get('/', (request, response) => {
  response.render('./views/index.html.njk');
});

app.listen(port, () => {
  console.log(`app is running here: http://localhost:${port}`);
});