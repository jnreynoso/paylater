const Joi = require('@hapi/joi');
const { BankAccountRepository } = require('../repositories');
const { checkError, validator } = require('../utils');

const repository = new BankAccountRepository()

const schemaParams = Joi.object().keys({
  userToken: Joi.string().required(),
})

const schemaPost = Joi.object().keys({
  bankAccountId : Joi.string().required(),
  bankAccountPurpose: Joi.string().required(),
  bankAccountRelationship: Joi.string().required(),
  branchId: Joi.string().required()
});

const makeRouter = router => {
  router.get('/:userToken/bank-accounts', (req, res) => {
    const {
      params: { userToken }
    } = req

    repository.list(userToken, (errors, users) => {
      const { status, data } = checkError(errors, users)

      res.status(status).json(data)
    })
  })

  const middlewares = [
    validator(schemaParams, 'params'),
    validator(schemaPost, 'body')
  ]

  router.post('/:userToken/bank-accounts', middlewares, (req, res) => {
    const {
      body,
      params: { userToken }
    } = req

    repository.create(userToken, body, (errors, user) => {
      const { status, data } = checkError(errors, user)

      res.status(status).json(data)
    })
  })
}

module.exports = makeRouter

