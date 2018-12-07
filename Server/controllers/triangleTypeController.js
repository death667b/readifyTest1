exports.index = (req, res, next) => {
  const {a, b, c} = req.query || 0;

  // Return if Equilateral triangle
  if (a === b && b === c) {
    res.json("Equilateral");
    return;
  }

  if (a === b || a === c || b ===c) {
    res.json("Isosceles");
    return;
  }

  if (a !== b && a !== c && b !== c) {
    res.json("Scalene");
    return
  }

  res.json("Error");
}