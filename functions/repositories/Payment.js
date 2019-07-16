const services = require('../services');
const { Payment } = require('../models')

const hyperwallet = services('Hyperwallet');

class PaymentRepository {
  create(payment, callback) {
    const model = new Payment(payment)

    hyperwallet.createPayment(model, (errors, body, res) => {
      if (errors) {
        console.error('Created payment failed', model);
        console.error(errors);

        return callback(errors, null);
      }

      return callback(null, body);
    })
  }
  update() {}
  delete() {}
  list() { }
}

module.exports = PaymentRepository
