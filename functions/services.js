const functions = require('firebase-functions');
const Hyperwallet = require('hyperwallet-sdk');

var library = {};

const services = (name, options) => {
  if (library[name]) return library[name];

  switch(name) {
    case 'Hyperwallet':
      library[name] = new Hyperwallet(
        Object.assign({
          username: functions.config().hyperwallet.username,
          password: functions.config().hyperwallet.password,
          programToken: functions.config().hyperwallet.program
        }, options)
      );
      break;
  }

  return library[name]
}

module.exports = services

