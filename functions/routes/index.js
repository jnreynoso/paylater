const express = require('express')

const { Router } = express

const router = Router()

router.use('/users', require('./users'));

router.use((err, req, res, next) => {
  console.error('Global error handler', err.message);
  console.error('Error Name', err.name);

  if(err.name === 'ValidationError'){
    console.log(err)
    return res.status(422).json({
      errors: err.details.map((errors, key) => {
        return err.details[key].message.replace(/['"]/g, '')
      })
    })
  }

  return next(err);
})

module.exports = router;
