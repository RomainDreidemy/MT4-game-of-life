import {ICoordinate} from "../interfaces/grid.interface";

export const MINIMAL_ROWS: number = 10;
export const MINIMAL_COLUMNS: number = 10;

export const GRID_CELL_UP_VALUE: number = 1;
export const GRID_CELL_DOWN_VALUE: number = 0;

export const DEFAULT_COORDINATES: ICoordinate[] = [
  {line: 3, column: 4},
  {line: 4, column: 4},
  {line: 5, column: 4}
];

export const AROUND_CELLS = [
  {x: 0, y: 1},
  {x: 0, y: -1},
  {x: 1, y: 0},
  {x: 1, y: 1},
  {x: 1, y: -1},
  {x: -1, y: 0},
  {x: -1, y: 1},
  {x: -1, y: -1}
];
