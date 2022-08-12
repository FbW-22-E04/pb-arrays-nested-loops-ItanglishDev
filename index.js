// Ex 1

let string = ""
for (let i = 0; i < 5; i++) {
  console.log(string);
  string += "*"
}

// Ex 2

const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]];

for (let i = 0; i < ARR.length; i++) {
  console.log(`row ${[i]}`);
  for (let j = 0; j < ARR[i].length; j++) {
    console.log(ARR[i][j]);
  }
}

// EX 3

// 1 1 1 2 2 2 3 3 3 4 4 4

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

function output(input) {
  const array = []
  let secondArray = []
  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < 3; j++) {
      array.push(input[i])
    }
  } newString = array.join(" ")
  // console.log(array);
  console.log(newString);
  for (let i = 0; i < 3; i++) {
    let inputTwo = []
    inputTwo = input.join(" ")
    secondArray.push(inputTwo)
  } let secondString = secondArray.join(" ")
  console.log(secondString);
}
output([0, 1, 2, 3, 4]);
