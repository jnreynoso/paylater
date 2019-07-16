const Hyperwallet = require('hyperwallet-sdk');

var library = {};

const services = (name, options) => {
  if (library[name]) return library[name];

  switch(name) {
    case 'Hyperwallet':
      library[name] = new Hyperwallet(
        Object.assign({
          username: process.env.HYPER_WALLET_USERNAME,
          password: process.env.HYPER_WALLET_PASSWORD,
          programToken: process.env.HYPER_WALLET_PROGRAM
        }, options)
      );
      break;
  }

  return library[name]
}

module.exports = services

