//Part 1, Rectangle
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 8,
  width: 4
};

const isSquare = function(arr) {
  if (arr.length === arr.width) {
    console.log(`It's a Square`);
  } else {
    console.log(`It's not a Square`);
  };
};

isSquare(rectangleA);
isSquare(rectangleB);

const area = function(arr) {
  console.log(`Area is ${arr.length * arr.width}`);
};

area(rectangleA);
area(rectangleB);

const perimeter = function(arr) {
  console.log(`Perimeter is ${(arr.length * 2) + (arr.width * 2)}`);
};

perimeter(rectangleA);
perimeter(rectangleB);

//Part 2, Triangle
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};

const isEquilateral = function(sides) {
  if (sides.sideA === sides.sideB && sides.sideB === sides.sideC) {
    console.log(`It's an equilateral triangle`);
  } else {
    console.log(`It's not an equilateral triangle`);
  }
};

isEquilateral(triangleA);
isEquilateral(triangleB);

const isIsosceles = function(sides) {
  if (sides.sideA ** 2 + sides.sideB ** 2 === sides.sideC ** 2) {
    console.log(`It's an isoceles triangle`);
  } else if (sides.sideC ** 2 + sides.sideA ** 2 === sides.sideB ** 2) {
    console.log(`It's an isoceles triangle`);
  } else if (sides.sideB ** 2 + sides.sideC ** 2 === sides.sideA ** 2) {
    console.log(`It's an isoceles triangle`);
  } else {
    console.log(`It's not an isoceles triangle`);
  };
};

isIsosceles(triangleA);
isIsosceles(triangleB);

const areaTri = function(sides) {
  const s = (sides.sideA + sides.sideB + sides.sideC) / 2;
  const areaCalc = Math.sqrt(s * (s - sides.sideA) * (s - sides.sideB) * (s - sides.sideC));
  console.log(areaCalc);
};

areaTri(triangleA);
areaTri(triangleB);

const isObtuse = function(sides) {

  const largerSide = Math.max(sides.sideA, sides.sideB, sides.sideC)
  const smallerSides = [sides.sideA, sides.sideB]
  if (largerSide > sides.sideC) {
    smallerSides[0] = sides.sideC
  } else if (largerSide > sides.sideC) {
    smallerSides[1] = sides.sideC
  }

  if ((smallerSides[0] ** 2) + (smallerSides[1] ** 2) > largerSide ** 2) {
    console.log(`It's an obtuse triangle`);
  } else {
    console.log(`It's not an obtuse triangle`);
  };
};

isObtuse(triangleA);
isObtuse(triangleB);
