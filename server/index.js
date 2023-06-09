const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./src/routes/users');

const mongoURL = 'mongodb+srv://admin:admin@cluster0.tg8w2zp.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
// require('./src/routes/users')(app);

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(4040, (err) => {
    if (err) console.log('Did not connected');
    console.log('Server running on port: 4040');
  });
})