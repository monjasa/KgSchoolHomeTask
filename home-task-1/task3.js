function solveQuadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  let solvingStrategy;
  if (Math.abs(discriminant) < Number.EPSILON) {
    solvingStrategy = getDistinctRoot;
  } else if (discriminant > 0) {
    solvingStrategy = getRealRoots;
  } else {
    solvingStrategy = getComplexRoots;
  }

  return solvingStrategy(a, b, discriminant);
}

function getDistinctRoot(a, b, discriminant) {
  return -b / (2 * a);
}

function getRealRoots(a, b, discriminant) {
  const firstRoot = (-b - Math.sqrt(discriminant)) / (2 * a);
  const secondRoot = (-b + Math.sqrt(discriminant)) / (2 * a);

  return concatenateRoots(firstRoot, secondRoot);
}

function getComplexRoots(a, b, discriminant) {
  const realPart = -b / (2 * a);
  const imaginaryPart = Math.sqrt(-1 * discriminant) / (2 * a);

  const firstRoot = `${realPart} + ${imaginaryPart}i`;
  const secondRoot = `${realPart} - ${imaginaryPart}i`;

  return concatenateRoots(firstRoot, secondRoot);
}

function concatenateRoots(firstRoot, secondRoot) {
  return `${firstRoot}, ${secondRoot}`;
}

console.log(solveQuadraticEquation(1, -1, -2)); // -1, 2
