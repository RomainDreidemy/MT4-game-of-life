import {
  DEFAULT_COORDINATES,
  GRID_CELL_DOWN_VALUE,
  GRID_CELL_UP_VALUE,
  MINIMAL_COLUMNS,
  MINIMAL_ROWS
} from "../../config/grid.config";

export const generateGrid = (nbRows: number = MINIMAL_ROWS, nbColumns: number = MINIMAL_COLUMNS): number[][] => {
  const emptyGrid = generateEmptyGrid(nbRows, nbColumns);
  return insertDefaultValues(emptyGrid);
}

const generateEmptyGrid = (nbRows: number = MINIMAL_ROWS, nbColumns: number = MINIMAL_COLUMNS): number[][] => {
  if(nbRows < MINIMAL_ROWS) {
    throw new RangeError(`nbRows should be up greater or equal tha ${MINIMAL_ROWS}`);
  }

  if(nbColumns < MINIMAL_COLUMNS) {
    throw new RangeError(`nbColumns should be up greater or equal tha ${MINIMAL_COLUMNS}`);
  }

  const grid = [];
  for (let i = 0; i < nbRows; i++) {
    grid.push(Array.from(Array(nbColumns), () => GRID_CELL_DOWN_VALUE));
  }

  return grid;
}

const insertDefaultValues = (grid: number[][]): number[][] => {
  for (let i = 0; i < DEFAULT_COORDINATES.length; i++) {
    grid[DEFAULT_COORDINATES[i].line][DEFAULT_COORDINATES[i].column] = GRID_CELL_UP_VALUE
  }

  return grid;
}
