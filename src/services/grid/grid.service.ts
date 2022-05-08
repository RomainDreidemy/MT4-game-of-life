import {
  AROUND_CELLS,
  GRID_CELL_DOWN_VALUE,
  GRID_CELL_UP_VALUE,
  MINIMAL_COLUMNS,
  MINIMAL_ROWS
} from "../../config/grid.config";
import {CellType} from "../../types/cell.type";
import {GripType} from "../../types/grip.type";
import {generateCellValue, updateCell} from "../cell/cell.service";
import {generateLine} from "../line/line.service";

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

export const nextGrid = (grid: GripType): GripType => {
  let newGrid = duplicateGrid(grid);

  for (let line = 0; line < grid.length; line++) {
    for (let column = 0; column < grid[line].length; column++) {
      newGrid = updateCell(grid, newGrid, line, column);
    }
  }

  return newGrid;
}

export const duplicateGrid = (grid: GripType): GripType => {
  return grid.map(function (arr) {
    return arr.slice();
  })
}
