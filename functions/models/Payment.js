const { get } = require('lodash');

class Payment {
  constructor (fields) {
    this.amount = get(fields, 'amount')
    this.clientPaymentId = get(fields, 'clientPaymentId')
    this.currency = get(fields, 'currency')
    this.destinationToken = get(fields, 'destinationToken')
    this.programToken = get(fields, 'programToken')
    this.purpose = get(fields, 'purpose')
  }
}

module.exports = Payment

