const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware za parsiranje JSON podataka
app.use(bodyParser.json());

// Povezivanje sa MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mojaBaza', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Povezivanje sa bazom je uspešno!'))
  .catch((err) => console.error('Greška pri povezivanju sa bazom:', err));

// Pokretanje servera
app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});


const User = require('./user');

// Ruta za registraciju
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Registracija uspešna!' });
  } catch (error) {
    res.status(500).json({ error: 'Greška pri registraciji korisnika.' });
  }
});