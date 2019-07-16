const express = require('express');
const Joi = require('@hapi/joi');
const { PaymentRepository } = require('../repositories');
const { checkError, validator } = require('../utils');

const { Router } = express;
const router = Router()
const repository = new PaymentRepository()

const schemaPost = Joi.object().keys({
  amount: Joi.number().required(),
  clientPaymentId : Joi.string().max(50).required(),
  currency: Joi.string().required(),
  destinationToken : Joi.string().required(),
  programToken: Joi.string().required(),
  purpose: Joi.string().required()
});

router.post('/', validator(schemaPost, 'body'), (req, res) => {
  const body = req.body

  repository.create(body, (errors, user) => {
    const { status, data } = checkError(errors, user)

    res.status(status).json(data)
  })
})

module.exports = router

