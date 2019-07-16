const Joi = require('@hapi/joi');
const { get } = require('lodash');

const checkError = (errors, data) => {
  if (errors) return {
    status: 400,
    data: errors
  }

  return {
    status: 200,
    data
  }
}

const validator = (schema, path) => function (req, res, next) {
  const result = Joi.validate(get(req, path), schema, (err, value) => {
    if (err) throw err

    next()
  })
}

exports.checkError = checkError;
exports.validator = validator;
