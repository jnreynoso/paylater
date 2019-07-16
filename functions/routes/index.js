const router = require('express').Router;

router.use('/users', require('./users'));

router.use((err, req, res, next) => {
  console.error('Global error handler', err.message);
  console.error('Error Name', err.name);

  return next(err);
})

module.exports = router;
