/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
  let number = 0;
  // traverse 2D array
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
    // If value == 1 call dfs 
      if (grid[i][j] == "1") number += dfs(grid, i, j);
    }
  }
  return number;
};

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] == "0"
  ) {
    return 0;
  }
  grid[i][j] = 0;
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  return 1;
};
