const fib = require('../utils/fibonacci');

exports.index = (req, res, next) => {
  n = req.query.n || 0;

  const fibNumber = fib(n);

  res.json(fibNumber);
}