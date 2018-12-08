exports.index = (req, res, next) => {
  let {a, b, c} = req.query || 0;

  // convert to integer from string
  try {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
  } catch(e) {
    console.log(`Error is ${e}`)
    res.json("Error");
    return;
  }

  // If there are strings that are not numbers (NaN) - return error
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log(`There is a NaN in the data: a=${a}, b=${b} and c=${c}`)
    res.json("Error");
    return;
  }

  console.log(`Triange Type(a,b,c) = ${a}, ${b} and ${c}`)

  // Test for valid input - no negitive numbers
  if (a < 1 || b < 1 || c < 1) {
    console.log('Responding with "Error"')
    res.json("Error");
    return;
  }

  // Test for valid input - triangle inequality theorem
  if (a+b <= c || a+c <= b || c+b <= a) {
    console.log('Responding with "Error"')
    res.json("Error");
    return;
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