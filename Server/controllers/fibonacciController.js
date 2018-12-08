const fib = require('../utils/fibonacci');

exports.index = (req, res, next) => {
  n = req.query.n || 0;
  console.log(`Fibonacci(n) = ${n}`)

  const fibNumber = fib(n);

  res.json(fibNumber);
}