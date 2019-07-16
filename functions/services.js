const Hyperwallet = require('hyperwallet-sdk');

var library = {};

const services = (name, options) => {
  if (library[name]) return library[name];

  switch(name) {
    case 'Hyperwallet':
      library[name] = new Hyperwallet(
        Object.assign({
          username: process.env.HYPER_WALLET_USERNAME || 'ByPassGFun',
          password: process.env.HYPER_WALLET_PASSWORD || 'ByPassGFun',
          programToken: process.env.HYPER_WALLET_PROGRAM || 'ByPassGFun'
        }, options)
      );
      break;
  }

  return library[name]
}

module.exports = services

