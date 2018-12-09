const fib = require('../utils/fibonacci');

exports.index = (req, res, next) => {
  let n = req.query.n || 0;

  // Make convert to a number and be positive
  n = Math.abs(parseInt(n));

  // If no number is entered - return status 400 - no content
  if (isNaN(n)) {
    res.status(400).json('no content');
    return;
  }

  // If the number is less than 103 just return 'no content' and response code 400
  // Numbers above 102 will work, however they are then displayed as scientific notation.
  // Largest number is 1436 before null is returned
  if (n >= 103) {
    res.status(400).json('no content');
    return;
  }

  console.log(`Fibonacci(n) = ${n}`)

  const fibNumber = fib(n);
  console.log(`Fib Number: ${fibNumber}`);

  res.json(fibNumber);
}