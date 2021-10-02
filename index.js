import express from 'express';

const app = express();
const PORT = 8080;

// Start our API, listen on port
app.listen(PORT, () => console.log(`API is live on http://localhost:${PORT}`));

// Add endpoint to API

//! GET
// Request  = incoming data,
// Response = Data to send back
app.get('/tshirt', (req, res) => {
  // OK Request
  res.status(200).send({
    tshirt : '👕',
    size   : 'Smol'
  });
});

//! POST
app.post('.tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ Message: 'We need a logo' });
  }

  res.send({
    tshirt : "👕 with yout $'{logo}"
  });
});
