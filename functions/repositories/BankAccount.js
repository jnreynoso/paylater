const services = require('../services');
const { BankAccount } = require('../models')

const hyperwallet = services('Hyperwallet');

class BankAccountRepository {
  create(userToken, bankAccount, callback) {
    const model = new BankAccount(bankAccount)

    hyperwallet.createBankAccount(userToken, model, (errors, body, res) => {
      if (errors) {
        console.error('Created bank account failed', model);
        console.error(errors);

        return callback(errors, null);
      }

      return callback(null, body);
    })
  }
  update() {}
  delete() {}
  list(userToken, callback) {
    hyperwallet.listBankAccounts(userToken, {}, (errors, bankAccount) => {
      if (errors) {
        console.error('List bank account failed', errors);
        console.error(errors);

        return callback(errors, null)
      }

      return callback(null, bankAccount)
    })
  }
}

module.exports = BankAccountRepository
