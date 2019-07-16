const express = require('express');
const Joi = require('@hapi/joi');
const { UserRepository } = require('../repositories');
const { checkError, validator } = require('../utils');
const bankAccountRouter = require('./bank-accounts');

const { Router } = express;
const router = Router()
const repository = new UserRepository()

const schemaPost = Joi.object().keys({
  clientUserId: Joi.string().max(75).required(),
  addressLine1: Joi.string().max(100).required(),
  city: Joi.string().max(50).required(),
  country: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  email: Joi.string().max(200).required(),
  firstName: Joi.string().max(50).required(),
  lastName: Joi.string().max(50).required(),
  postalCode: Joi.string().max(16).required(),
  profileType: Joi.string().valid(['INDIVIDUAL', 'BUSINESS']).required(),
  programToken: Joi.string().required(),
  stateProvince: Joi.string().max(50).required()
});

router.get('/', (req, res) => {
  repository.list((errors, users) => {
    const { status, data } = checkError(errors, users)

    res.status(status).json(data)
  })
})

router.post('/', validator(schemaPost, 'body'), (req, res) => {
  const body = req.body

  repository.create(body, (errors, user) => {
    const { status, data } = checkError(errors, user)

    res.status(status).json(data)
  })
})

bankAccountRouter(router);

module.exports = router

