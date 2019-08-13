const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

const User = require('./app/models/user');

mongoose.Promise = require('bluebird');

let configDB;

try {
  configDB = require('./app/config/database.js');
} catch(e) {
  configDB = { url: process.env.MONGODB_URI };
}

mongoose.connect(configDB.url, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  http.listen(process.env.PORT || 3001);
});


app.use( express.static('client/dist') );

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

require('socketio-auth')(io, {
  authenticate: function (socket, data, callback) {
    const username = data.username;
    const password = data.password;

    User.findOne({ 'username': username }, function (err, user) {
      if (err || !user) return callback(new Error("User not found"));
      return callback(null, user.validPassword(password));
    });
  },

  postAuthenticate: function (socket, data) {
    const username = data.username;

    User.findOne({ 'username': username }, function (err, user) {
      socket.client.user = user;
    });

    // invia i dati di gioco e dell'utente
    socket.emit('loginResponse', {
      message: 'sei dentro',
      username: username
    })
  },

  disconnect: function  (socket) {
    console.log(socket.id + ' disconnected');
  },

  timeout: 30000  // 30 sec
});


io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('signup', function (data) {
      console.log(data);

      User.findOne({ 'email': data.email }, function (err, user) {
        if (err) {
          socket.emit('signupResponse', {
            success: false,
            message: err
          });
  
          return;
        }
  
        if (user) {
          socket.emit('signupResponse', {
            success: false,
            message: 'Email already in use'
          });
  
          return;
        }
  
        const newUser = new User();
        newUser.email = data.email;
        newUser.username = data.username;
        newUser.password = newUser.generateHash(data.password);
        newUser.createdAt = new Date();
  
        newUser.save(function(err) {
          if (err) throw err;
        });
  
        // inviare anche i dati iniziali (utente e gioco)
        socket.emit('signupResponse', {
          success: true
        });
      });
    });
});