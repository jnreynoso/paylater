const { get } = require('lodash');

class BankAccount {
  constructor (fields) {
    this.bankAccountId = get(fields, 'bankAccountId')
    this.bankAccountPurpose = get(fields, 'bankAccountPurpose')
    this.bankAccountRelationship = get(fields, 'bankAccountRelationship')
    this.branchId = get(fields, 'branchId')
    this.transferMethodCountry = 'US'
    this.transferMethodCurrency = 'USD'
    this.type = 'BANK_ACCOUNT'
  }
}

module.exports = BankAccount
