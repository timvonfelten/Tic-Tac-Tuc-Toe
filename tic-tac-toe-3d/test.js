var cells= Array(4)
        .fill()
        .map(() =>
          Array(4)
            .fill()
            .map(() => Array(4).fill("y")));

console.log(cells[2][2][2]);


function calculateWinner(cells) {
    // Check horizontal
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        for (let z = 0; z < 2; z++) {
          if (
            cells[x][y][z] &&
            cells[x][y][z] === cells[x][y][z + 1] &&
            cells[x][y][z] === cells[x][y][z + 2] &&
            cells[x][y][z] === cells[x][y][z + 3]
          ) {
            console.log( cells[x][y][z]);
          }
        }
      }
    }
  
    // Check vertical
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 2; y++) {
        for (let z = 0; z < 4; z++) {
          if (
            cells[x][y][z] &&
            cells[x][y][z] === cells[x][y + 1][z] &&
            cells[x][y][z] === cells[x][y + 2][z] &&
            cells[x][y][z] === cells[x][y + 3][z]
          ) {
            return cells[x][y][z];
          }
        }
      }
    }
  
    // Check diagonal
    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 2; y++) {
        for (let z = 0; z < 2; z++) {
          if (
            cells[x][y][z] &&
            cells[x][y][z] === cells[x + 1][y + 1][z + 1] &&
            cells[x][y][z] === cells[x + 2][y + 2][z + 2]
            ) {
              return cells[x][y][z];
            }
            if (
              cells[x][y + 3][z] &&
              cells[x][y + 3][z] === cells[x + 1][y + 2][z + 1] &&
              cells[x][y + 3][z] === cells[x + 2][y + 1][z + 2] &&
              cells[x][y + 3][z] === cells[x + 3][y][z + 3]
            ) {
              return cells[x][y + 3][z];
            }
            if (
              cells[x + 3][y][z] &&
              cells[x + 3][y][z] === cells[x + 2][y + 1][z + 1] &&
              cells[x + 3][y][z] === cells[x + 1][y + 2][z + 2] &&
              cells[x + 3][y][z] === cells[x][y + 3][z + 3]
            ) {
              return cells[x + 3][y][z];
            }
            if (
              cells[x][y + 3][z + 3] &&
              cells[x][y + 3][z + 3] === cells[x + 1][y + 2][z + 2] &&
              cells[x][y + 3][z + 3] === cells[x + 2][y + 1][z + 1] &&
              cells[x][y + 3][z + 3] === cells[x + 3][y][z]
            ) {
              return cells[x][y + 3][z + 3];
            }
            if (
              cells[x + 3][y][z + 3] &&
              cells[x + 3][y][z + 3] === cells[x + 2][y + 1][z + 2] &&
              cells[x + 3][y][z + 3] === cells[x + 1][y + 2][z + 1] &&
              cells[x + 3][y][z + 3] === cells[x][y + 3][z]
            ) {
              return cells[x + 3][y][z + 3];
            }
          }
        }
      }
    
      // Check tie
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          for (let z = 0; z < 4; z++) {
            if (!cells[x][y][z]) {
              return null;
            }
          }
        }
      }
    
      return 'tie';
    }

    calculateWinner();