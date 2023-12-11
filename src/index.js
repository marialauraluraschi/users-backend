const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/connection');

const server = express();

server.use(express.json());
server.use(cors());
dbConnect();

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//* Endpoints
const usersController = require('./controllers/UsersControllers');

server.get('/users/getusers', usersController.getUsers);

server.post('/users/createUsers', usersController.createUser);

server.get('/users/getusersById/:_id', usersController.getUserById);

server.put('/users/updateUsersById/:_id', usersController.updateUserById);

server.delete('/users/deleteUsersById/:_id', usersController.deleteUserById);

module.exports = server;
