//For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

//Check to find the word horizontally and vertically
//Return true if the word is found, and return false if the word is not found

const transpose = function(matrix) {

  let newMatrix = [];

  for (let x = 0; x < matrix[0].length; x++) {
    let newRow = [];
    for (let y = 0; y < matrix.length; y++) { // Example 1 = Loops 4 times; 2 = 2 times; 7
      newRow.push(matrix[y][x]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};

const checkDiagonal = (array, word, i, j) => {
  const rows = array.length;
  const cols = array[0].length;
  let k = 0;

  while (i + k < rows && j + k < cols && array[i + k][j + k] === word[k]) {
    k++;
  }

  return k === word.length;
};

const searchDiagonal = (array, word) => {
  const rows = array.length;
  const cols = array[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (checkDiagonal(array, word, i, j)) {
        return true;
      }
    }
  }
  return false;
};

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  if (searchDiagonal(letters, word)) {
    return true;
  }

  const backwardsJoin = letters.map(ls => ls.reverse().join(''));
  for (l of backwardsJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;


//EXPECTED
const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'AECTY');

console.log(result);