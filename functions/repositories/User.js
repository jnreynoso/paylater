const services = require('../services');
const { User } = require('../models')

const hyperwallet = services('Hyperwallet');

class UserRepository {
  create(user, callback) {
    const model = new User(user)

    hyperwallet.createUser(model, (errors, body, res) => {
      if (errors) {
        console.error('Created user failed', user);
        console.error(errors);

        return callback(errors, null);
      }

      return callback(null, body);
    })
  }
  update() {}
  delete() {}
  list(callback) {
    hyperwallet.listUsers({}, (errors, users) => {
      if (errors) {
        console.error('List user failed', errors);
        console.error(errors);

        return callback(errors, null)
      }

      return callback(null, users)
    })
  }
}

module.exports = UserRepository
