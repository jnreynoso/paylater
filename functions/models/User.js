const { get } = require('lodash');

class User {
  constructor (fields) {
    this.addressLine1 = get(fields, 'addressLine1')
    this.city = get(fields, 'city')
    this.clientUserId = get(fields, 'clientUserId')
    this.country = get(fields, 'country')
    this.dateOfBirth = get(fields, 'dateOfBirth')
    this.email = get(fields, 'email')
    this.firstName = get(fields, 'firstName')
    this.lastName = get(fields, 'lastName')
    this.postalCode = get(fields, 'postalCode')
    this.profileType = get(fields, 'profileType')
    this.programToken = get(fields, 'programToken')
    this.stateProvince = get(fields, 'stateProvince')
  }

  fullName () {
    return this.firstName + this.lastName
  }
}

module.exports = User

