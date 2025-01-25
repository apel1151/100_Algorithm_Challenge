// Question: Give a rectangular matrix of characters, add a border of asterisks(*) to it. use concat(), unshift(), push()

/*****************Answer*********************/


const addBorder = (matrix) => {
    const borderLength = matrix[0].length + 2; // Length of the top and bottom border
    const borderRow = '*'.repeat(borderLength); // Create a border row of asterisks
  
    // Add the top border using unshift()
    matrix.unshift(borderRow);
  
    // Add the bottom border using push()
    matrix.push(borderRow);
  
    // Add side borders to each row using map()
    for (let i = 1; i < matrix.length - 1; i++) {
      matrix[i] = '*' + matrix[i] + '*'; // Add asterisks to the start and end of each row
    }
  
    return matrix; // Return the bordered matrix
  };
  
  // Example Usage
  const matrix = [
    "abc",
    "def",
    "ghi"
  ];
  
  const result = addBorder(matrix);
  console.log(result);
  
