import {
  AROUND_CELLS,
  GRID_CELL_DOWN_VALUE,
  GRID_CELL_UP_VALUE,
  MINIMAL_COLUMNS,
  MINIMAL_ROWS
} from "../../config/grid.config";
import {CellType} from "../../types/cell.type";
import {GripType} from "../../types/grip.type";

export const generateGrid = (nbRows: number = MINIMAL_ROWS, nbColumns: number = MINIMAL_COLUMNS, generatorLine: () => CellType[] = () => generateLine()): GripType => {
  if (nbRows < MINIMAL_ROWS) {
    throw new RangeError(`nbRows should be up greater or equal than ${MINIMAL_ROWS}`);
  }

  if (nbColumns < MINIMAL_COLUMNS) {
    throw new RangeError(`nbColumns should be up greater or equal than ${MINIMAL_COLUMNS}`);
  }

  const grid: CellType[][] = [];
  for (let i = 0; i < nbRows; i++) {
    grid.push(generatorLine());
  }

  return grid;
}

export const generateLine = (nbColumns: number = MINIMAL_COLUMNS, generatorCell: () => CellType = () => generateCellValue()): CellType[] => {
  return Array.from(Array(nbColumns), () => generatorCell());
}

export const nextGrid = (grid: GripType): GripType => {
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

const duplicateGrid = (grid: GripType): GripType => {
  return grid.map(function (arr) {
    return arr.slice();
  })
}

const updateCell = (grid: GripType, newGrid: GripType, line: number, column: number): GripType => {
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

export const isCellUp = (cell: CellType): boolean => cell === GRID_CELL_UP_VALUE;

export const isCellUnderpopulated = (nbNbOfNeighbours: number): boolean => nbNbOfNeighbours < 2;

export const isCellOvercrowded = (nbNbOfNeighbours: number): boolean => nbNbOfNeighbours > 3;

export const isGoodForReproduction = (nbNbOfNeighbours: number): boolean => nbNbOfNeighbours === 3;

export const generateCellValue = (random: number = Math.random()): CellType => {
  return random > 0.7 ? GRID_CELL_UP_VALUE : GRID_CELL_DOWN_VALUE
}
