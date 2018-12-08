exports.index = (req, res, next) => {
  const {a, b, c} = req.query || 0;
  console.log(`Triange Type(a,b,c) = ${a}, ${b} and ${c}`)

  // Test for valid inpup
  if (a < 1 || b < 1 || c < 1) {
    console.log('Responding with "Error"')
    res.json("Error");
  }

  // Return if Equilateral triangle
  if (a === b && b === c) {
    console.log('Responding with "Equilateral"')
    res.json("Equilateral");
    return;
  }

  if (a === b || a === c || b ===c) {
    console.log('Responding with "Isosceles"')
    res.json("Isosceles");
    return;
  }

  if (a !== b && a !== c && b !== c) {
    console.log('Responding with "Scalene"')
    res.json("Scalene");
    return;
  }

  // It doesn't fit any of options - return error
  console.log('Responding with "Error"')
  res.json("Error");
}