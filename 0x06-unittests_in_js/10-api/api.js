const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const payload = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(payload);
});

app.post('/login', (req, res) => {
  const userName = request.body.userName;

  if (userName) {
	  response.send(`Welcome ${userName}`);
  } else {
	  response.status(404).send();
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
