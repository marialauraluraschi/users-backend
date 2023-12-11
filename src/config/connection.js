const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {
  const pass = process.env.DB_PASS;
  const uri = `mongodb+srv://users:${pass}@cluster0.aslbhvp.mongodb.net/users?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a MongoDB'))
    .catch((e) => console.log('error de conexión', e));
};
module.exports = dbConnect;
