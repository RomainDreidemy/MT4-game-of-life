import {
  AROUND_CELLS,
  GRID_CELL_DOWN_VALUE,
  GRID_CELL_UP_VALUE,
  MINIMAL_COLUMNS,
  MINIMAL_ROWS
} from "../../../../config/grid.config";
import {CellType} from "../../../../types/cell.type";
import {GripType} from "../../../../types/grip.type";

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

export const updateCell = (grid: GripType, newGrid: GripType, line: number, column: number): GripType => {
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
