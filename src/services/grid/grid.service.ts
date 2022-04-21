import {
  AROUND_CELLS,
  GRID_CELL_DOWN_VALUE,
  GRID_CELL_UP_VALUE,
  MINIMAL_COLUMNS,
  MINIMAL_ROWS
} from "../../config/grid.config";

export const generateGrid = (nbRows: number = MINIMAL_ROWS, nbColumns: number = MINIMAL_COLUMNS): number[][] => {
  if(nbRows < MINIMAL_ROWS) {
    throw new RangeError(`nbRows should be up greater or equal tha ${MINIMAL_ROWS}`);
  }

  if(nbColumns < MINIMAL_COLUMNS) {
    throw new RangeError(`nbColumns should be up greater or equal tha ${MINIMAL_COLUMNS}`);
  }

  const grid = [];
  for (let i = 0; i < nbRows; i++) {
    grid.push(generateLine());
  }

  return grid;
}

const generateLine = (nbColumns: number = MINIMAL_COLUMNS): number[] => {
  return Array.from(Array(nbColumns), () => generateCellValue());
}

export const nextGrid = (grid: number[][]): number[][] => {
  let newGrid = duplicateGrid(grid);

  for (let line = 0; line < grid.length; line++) {
    for (let column = 0; column < grid[line].length; column++) {
      newGrid = updateCell(grid, newGrid, line, column);
    }
  }

  return newGrid;
}

const getNbOfNeighbours = (grid: number[][], line: number, column: number): number => {
  let count = 0;
  for (let i = 0; i < AROUND_CELLS.length; i++) {
    const lineToCheck = grid[line + AROUND_CELLS[i].x];

    if (lineToCheck) {
      const cellToCheck = lineToCheck[column + AROUND_CELLS[i].y];
      if (cellToCheck) {
        let neighbour = grid[line + AROUND_CELLS[i].x][column + AROUND_CELLS[i].y];

        if (neighbour === GRID_CELL_UP_VALUE) {
          count++
        }
      }
    }
  }

  return count;
}

const duplicateGrid = (grid: number[][]): number[][] => {
  return grid.map(function(arr) {
    return arr.slice();
  })
}

const updateCell = (grid: number[][], newGrid: number[][], line: number, column: number): number[][] => {
  const nbNbOfNeighbours = getNbOfNeighbours(grid, line, column);

  let value = GRID_CELL_DOWN_VALUE;

  if (isCellUp(grid[line][column])) {
    if (isCellUnderpopulated(nbNbOfNeighbours) || isCellOvercrowded(nbNbOfNeighbours)) {
      value = GRID_CELL_DOWN_VALUE;
    } else {
      value = GRID_CELL_UP_VALUE;
    }
  } else {
    if (isGoodForReproduction(nbNbOfNeighbours)) {
      value = GRID_CELL_UP_VALUE;
    }
  }

  newGrid[line][column] = value;

  return newGrid;
}

const isCellUp = (cell: number): boolean => cell === GRID_CELL_UP_VALUE;

const isCellUnderpopulated = (nbNbOfNeighbours: number): boolean => nbNbOfNeighbours < 2;

const isCellOvercrowded = (nbNbOfNeighbours: number): boolean => nbNbOfNeighbours > 3;

const isGoodForReproduction = (nbNbOfNeighbours: number): boolean => nbNbOfNeighbours === 3;

const generateCellValue = (random: number = Math.random()): number => {
  return random > 0.7 ? GRID_CELL_UP_VALUE : GRID_CELL_DOWN_VALUE
}
